import prisma from '../config/prismaClient';
import { Request, RequestHandler, Response } from 'express';

export const getAllStudents: RequestHandler = async (req: Request, res: Response) => {
  const students = await prisma.student.findMany({
    include: {
      programme: {
        include: {
          course: true
        }
      }
    }
  });
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

export const getStudentByQrRecordId: RequestHandler = async (req, res) => {
  const { qrId } = req.params;
  const qrRecord = await prisma.studentQrCode.findUnique({
    where: { id: qrId },
    include: { student: {
      include: {
        enrolledUnits: {
          include: {
            courseUnit: true
          }
        },
        studentQrCodes: true,
        programme: {
          include: {
            course: {
              include: {
                department: {
                  include: {
                    facultyOrSchool: true
                  }
                }
              }
            }
          }
        }
      }
    }}
  });
  if (!qrRecord || !qrRecord.student) {
    res.status(404).json({ message: "Student not found for this QR code" });
    return;
  }
  res.json(qrRecord.student);
};

export const approveEnrolledCourseUnit: RequestHandler = async (req, res) => {
  const { enrolledCourseUnitId } = req.params;
  const { approvedBy } = req.body; // e.g., staffId or name

  try {
    const updated = await prisma.enrolledCourseUnit.update({
      where: { id: enrolledCourseUnitId },
      data: {
        isInvigilatorApproved: true,
        invigilatorApprovedAt: new Date(), // <-- Correct field name
        approvedBy: approvedBy,
      },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to approve course unit", error });
  }
};