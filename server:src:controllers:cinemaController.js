import prisma from "../prismaClient.js";
import { logAdminAction } from "../services/auditService.js";

export const createCinema = async (req, res) => {
  try {
    const cinema = await prisma.cinema.create({
      data: req.body
    });
    await logAdminAction(req.user.id, `Created cinema ${cinema.name}`);
    res.json(cinema);
  } catch (err) {
    res.status(500).json({ error: "Failed to create cinema" });
  }
};

export const updateCinema = async (req, res) => {
  try {
    const cinema = await prisma.cinema.update({
      where: { id: parseInt(req.params.id) },
      data: req.body
    });
    await logAdminAction(req.user.id, `Updated cinema ${cinema.name}`);
    res.json(cinema);
  } catch (err) {
    res.status(500).json({ error: "Failed to update cinema" });
  }
};

export const deleteCinema = async (req, res) => {
  try {
    const cinema = await prisma.cinema.delete({
      where: { id: parseInt(req.params.id) }
    });
    await logAdminAction(req.user.id, `Deleted cinema ${cinema.name}`);
    res.json({ message: "Cinema deleted, bookings preserved" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete cinema" });
  }
};

export const listCinemas = async (req, res) => {
  const cinemas = await prisma.cinema.findMany();
  res.json(cinemas);
};

