import prisma from '../config/prismaClient';
import { Request, Response } from 'express';

// GET /api/faculties - Get all faculties and schools
export const getAllFaculties = async (req: Request, res: Response) => {
  try {
    const faculties = await prisma.facultyOrSchool.findMany({
      select: { id: true, name: true },
      orderBy: { name: 'asc' },
    });
    res.json(faculties);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch faculties', error });
  }
};
