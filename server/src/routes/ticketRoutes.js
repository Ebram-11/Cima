import express from "express";
import { getTicket } from "../controllers/ticketController.js";
import { requireAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

// User can view their ticket
router.get("/:bookingId", requireAuth, getTicket);

export default router;
