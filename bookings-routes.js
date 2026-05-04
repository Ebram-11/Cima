// [SCRUM-49] View Booking History
// [SCRUM-55] Generate & Display Digital Ticket with QR Code

const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth-middleware');
const {
  createBooking,
  getBookingHistory,
  getTicket,
  validateQr,
} = require('../controllers/bookings-controller');

// All booking routes require authentication
router.use(authMiddleware);

// [SCRUM-55] Create a new booking (triggers ticket + QR generation)
router.post('/', createBooking);

// [SCRUM-49] Get paginated booking history for the logged-in user
router.get('/', getBookingHistory);

// [SCRUM-55] Get ticket with QR data for a specific booking
router.get('/:id/ticket', getTicket);

// [SCRUM-55] Validate a QR scan (staff/admin use — detects duplicate scans)
router.post('/validate-qr', validateQr);

module.exports = router;
