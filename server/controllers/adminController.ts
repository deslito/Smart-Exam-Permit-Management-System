import prisma from '../config/prismaClient';
import { Request, RequestHandler, Response } from 'express';

export const getAllAdmins: RequestHandler = async (req: Request, res: Response) => {
  const admins = await prisma.admin.findMany();
  res.json(admins);
};

export const getAdminById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const admin = await prisma.admin.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });
  if (!admin) {
    res.status(404).json({ message: 'Admin not found' });
    return;
  }
  res.json(admin);
};