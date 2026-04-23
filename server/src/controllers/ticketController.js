import prisma from "../prismaClient.js";
import QRCode from "qrcode";

// Generate ticket after booking confirmation
export const generateTicket = async (bookingId) => {
  const booking = await prisma.booking.findUnique({ where: { id: bookingId } });
  if (!booking) throw new Error("Booking not found");

  // Encode booking reference in QR code
  const qrData = `BOOKING-${booking.id}`;
  const qrCodeImage = await QRCode.toDataURL(qrData);

  const ticket = await prisma.ticket.create({
    data: {
      bookingId: booking.id,
      qrCodeData: qrCodeImage
    }
  });

  return ticket;
};

// Get ticket by booking ID
export const getTicket = async (req, res) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { bookingId: parseInt(req.params.bookingId) }
    });
    if (!ticket) return res.status(404).json({ error: "Ticket not found" });
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch ticket" });
  }
};
