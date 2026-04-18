import { generateTicket } from "./ticketController.js";

export const confirmBooking = async (req, res) => {
  try {
    const booking = await prisma.booking.create({
      data: { ...req.body, userId: req.user.id }
    });

    // Generate ticket with QR code
    const ticket = await generateTicket(booking.id);

    res.json({ booking, ticket });
  } catch (err) {
    res.status(500).json({ error: "Booking failed" });
  }
};
