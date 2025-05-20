import prisma from '../config/prismaClient';
import { Request, RequestHandler, Response } from 'express';

export const getAllStudents: RequestHandler = async (req: Request, res: Response) => {
  const students = await prisma.student.findMany();
  res.json(students);
};

export const getStudentById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const student = await prisma.student.findUnique({
    where: { id },
    include: {
      enrolledUnits: {
        include: {
          courseUnit: {
            select: {
              title: true,
              code: true,
              credits: true,
              category: true,
              year: true,
              semester: true,
            }
          }
        },
        orderBy: [
          { year: 'asc' },
          { semester: 'asc' }
        ]
      },
      studentQrCodes: true,
      programme: {
        include: {
          course: {
            select: {
              name: true,
              code: true,
              department: {
                select: {
                  name: true,
                  facultyOrSchool: { select: { name: true } }
                }
              }
            }
          }
        }
      }
    },
  });
  if (!student) {
    res.status(404).json({ message: 'Student not found in controller' });
    return;
  }
  res.json(student);
};