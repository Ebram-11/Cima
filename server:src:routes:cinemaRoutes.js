import express from "express";
import {
  createCinema,
  updateCinema,
  deleteCinema,
  listCinemas
} from "../controllers/cinemaController.js";
import { requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", requireAdmin, createCinema);
router.put("/:id", requireAdmin, updateCinema);
router.delete("/:id", requireAdmin, deleteCinema);
router.get("/", listCinemas);

export default router;
