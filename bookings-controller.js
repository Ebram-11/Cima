// [SCRUM-49] View Booking History
// [SCRUM-55] Generate & Display Digital Ticket with QR Code

const { PrismaClient } = require('@prisma/client');
const crypto = require('crypto');

const prisma = new PrismaClient();

const BOOKINGS_PER_PAGE = 20;

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Generates a human-readable booking reference, e.g. "CIMA-A3F9B2"
 */
const generateReferenceNumber = () => {
  const suffix = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `CIMA-${suffix}`;
};

/**
 * Encodes booking data into a tamper-evident QR string using HMAC-SHA256.
 * Format:  <referenceNumber>|<userId>|<timestamp>|<hmac>
 * The HMAC ensures the QR can be verified server-side to detect duplicates/fakes.
 */
const generateQrData = (referenceNumber, userId) => {
  const timestamp = Date.now().toString();
  const payload = `${referenceNumber}|${userId}|${timestamp}`;
  const hmac = crypto
    .createHmac('sha256', process.env.QR_SECRET || 'cima-qr-secret')
    .update(payload)
    .digest('hex')
    .slice(0, 16); // 16 hex chars — compact but collision-resistant enough
  return `${payload}|${hmac}`;
};

// ── POST /api/bookings ────────────────────────────────────────────────────────
// [SCRUM-55] Creates a booking + seats + ticket with unique QR code.

const createBooking = async (req, res) => {
  try {
    const {
      movieId,
      movieTitle,
      moviePoster,
      cinemaId,
      cinemaName,
      cinemaLocation,
      showtime,
      showDate,
      seats,        // [{ row: "C", number: 7 }, ...]
      totalAmount,
    } = req.body;

    // ── Validation ────────────────────────────────
    if (
      !movieId || !movieTitle ||
      !cinemaId || !cinemaName || !cinemaLocation ||
      !showtime || !showDate ||
      !seats || !Array.isArray(seats) || seats.length === 0 ||
      totalAmount == null
    ) {
      return res.status(400).json({ message: 'Missing required booking fields.' });
    }

    const userId = req.user.id;

    // ── Generate unique reference & QR data ───────
    let referenceNumber;
    let isUnique = false;
    while (!isUnique) {
      referenceNumber = generateReferenceNumber();
      const existing = await prisma.booking.findUnique({ where: { referenceNumber } });
      if (!existing) isUnique = true;
    }

    const qrData = generateQrData(referenceNumber, userId);

    // ── Persist in a transaction ──────────────────
    const booking = await prisma.$transaction(async (tx) => {
      const newBooking = await tx.booking.create({
        data: {
          referenceNumber,
          userId,
          movieId,
          movieTitle,
          moviePoster: moviePoster || null,
          cinemaId,
          cinemaName,
          cinemaLocation,
          showtime,
          showDate,
          totalAmount,
          status: 'CONFIRMED',
          seats: {
            create: seats.map(({ row, number }) => ({ row, number })),
          },
          ticket: {
            create: { qrData },
          },
        },
        include: {
          seats: true,
          ticket: true,
        },
      });

      return newBooking;
    });

    res.status(201).json({
      message: 'Booking confirmed.',
      booking: {
        id: booking.id,
        referenceNumber: booking.referenceNumber,
        movieTitle: booking.movieTitle,
        cinemaName: booking.cinemaName,
        cinemaLocation: booking.cinemaLocation,
        showtime: booking.showtime,
        showDate: booking.showDate,
        totalAmount: booking.totalAmount,
        status: booking.status,
        seats: booking.seats.map((s) => ({ row: s.row, number: s.number })),
        ticket: {
          id: booking.ticket.id,
          qrData: booking.ticket.qrData,
        },
        createdAt: booking.createdAt,
      },
    });
  } catch (error) {
    console.error('[SCRUM-55] createBooking error:', error);
    res.status(500).json({ message: 'Failed to create booking. Please try again.' });
  }
};

// ── GET /api/bookings ─────────────────────────────────────────────────────────
// [SCRUM-49] Returns paginated booking history for the logged-in user.
// Query params: page (default 1)

const getBookingHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const skip = (page - 1) * BOOKINGS_PER_PAGE;

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' },
        skip,
        take: BOOKINGS_PER_PAGE,
        include: {
          seats: true,
          ticket: { select: { id: true, qrData: true, isUsed: true } },
        },
      }),
      prisma.booking.count({ where: { userId } }),
    ]);

    res.json({
      bookings: bookings.map((b) => ({
        id: b.id,
        referenceNumber: b.referenceNumber,
        movieId: b.movieId,
        movieTitle: b.movieTitle,
        moviePoster: b.moviePoster,
        cinemaName: b.cinemaName,
        cinemaLocation: b.cinemaLocation,
        showtime: b.showtime,
        showDate: b.showDate,
        totalAmount: b.totalAmount,
        status: b.status,
        seats: b.seats.map((s) => ({ row: s.row, number: s.number })),
        ticket: b.ticket
          ? { id: b.ticket.id, qrData: b.ticket.qrData, isUsed: b.ticket.isUsed }
          : null,
        createdAt: b.createdAt,
      })),
      pagination: {
        total,
        page,
        totalPages: Math.ceil(total / BOOKINGS_PER_PAGE),
        perPage: BOOKINGS_PER_PAGE,
      },
    });
  } catch (error) {
    console.error('[SCRUM-49] getBookingHistory error:', error);
    res.status(500).json({ message: 'Failed to fetch booking history.' });
  }
};

// ── GET /api/bookings/:id/ticket ──────────────────────────────────────────────
// [SCRUM-55] Returns the ticket (with QR data) for a specific booking.
// Only the booking owner can access it.

const getTicket = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        seats: true,
        ticket: true,
      },
    });

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found.' });
    }

    // Only the owner can view their ticket
    if (booking.userId !== userId) {
      return res.status(403).json({ message: 'Access denied.' });
    }

    if (!booking.ticket) {
      return res.status(404).json({ message: 'Ticket not found for this booking.' });
    }

    res.json({
      ticket: {
        id: booking.ticket.id,
        qrData: booking.ticket.qrData,
        isUsed: booking.ticket.isUsed,
      },
      booking: {
        id: booking.id,
        referenceNumber: booking.referenceNumber,
        movieId: booking.movieId,
        movieTitle: booking.movieTitle,
        moviePoster: booking.moviePoster,
        cinemaName: booking.cinemaName,
        cinemaLocation: booking.cinemaLocation,
        showtime: booking.showtime,
        showDate: booking.showDate,
        totalAmount: booking.totalAmount,
        status: booking.status,
        seats: booking.seats.map((s) => ({ row: s.row, number: s.number })),
        createdAt: booking.createdAt,
      },
    });
  } catch (error) {
    console.error('[SCRUM-55] getTicket error:', error);
    res.status(500).json({ message: 'Failed to fetch ticket.' });
  }
};

// ── POST /api/bookings/validate-qr ───────────────────────────────────────────
// [SCRUM-55] Staff/Admin scans QR — marks ticket as used, detects duplicates.

const validateQr = async (req, res) => {
  try {
    const { qrData } = req.body;

    if (!qrData) {
      return res.status(400).json({ message: 'QR data is required.' });
    }

    const ticket = await prisma.ticket.findUnique({
      where: { qrData },
      include: { booking: true },
    });

    if (!ticket) {
      return res.status(404).json({ valid: false, message: 'Invalid QR code. Ticket not found.' });
    }

    if (ticket.isUsed) {
      return res.status(409).json({
        valid: false,
        message: 'Duplicate scan detected. This ticket has already been used.',
        booking: {
          referenceNumber: ticket.booking.referenceNumber,
          movieTitle: ticket.booking.movieTitle,
        },
      });
    }

    // Mark as used
    await prisma.ticket.update({
      where: { id: ticket.id },
      data: { isUsed: true },
    });

    res.json({
      valid: true,
      message: 'Ticket validated successfully.',
      booking: {
        referenceNumber: ticket.booking.referenceNumber,
        movieTitle: ticket.booking.movieTitle,
        cinemaName: ticket.booking.cinemaName,
        showtime: ticket.booking.showtime,
        showDate: ticket.booking.showDate,
      },
    });
  } catch (error) {
    console.error('[SCRUM-55] validateQr error:', error);
    res.status(500).json({ message: 'QR validation failed.' });
  }
};

module.exports = { createBooking, getBookingHistory, getTicket, validateQr };
