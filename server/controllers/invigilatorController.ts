import prisma from '../config/prismaClient';
import { Request, RequestHandler, Response } from 'express';

export const getAllInvigilators: RequestHandler = async (req: Request, res: Response) => {
  const invigilators = await prisma.invigilator.findMany();
  res.json(invigilators);
};

export const getInvigilatorById: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const invigilator = await prisma.invigilator.findUnique({
    where: { id },
    include: {
      user: true,
      assignedExams: {
        include: {
          exam: {
            include: {
              courseUnit: true
            }
          }
        }
      }
    }
  });
  if (!invigilator) {
    res.status(404).json({ message: 'Invigilator not found' });
    return;
  }
  res.json(invigilator);
};