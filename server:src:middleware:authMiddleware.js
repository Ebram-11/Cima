import prisma from "../prismaClient.js";

export const requireAdmin = async (req, res, next) => {
  if (!req.user || req.user.role !== "ADMIN") {
    // log unauthorized attempt
    await prisma.auditLog.create({
      data: { adminId: 0, action: "Unauthorized access attempt" }
    });
    return res.status(403).json({ error: "Access denied" });
  }
  next();
};

