import prisma from "../prismaClient.js";

export const logAdminAction = async (adminId, action) => {
  await prisma.auditLog.create({
    data: { adminId, action }
  });
};
