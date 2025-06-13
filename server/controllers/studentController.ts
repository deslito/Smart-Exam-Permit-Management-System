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
  
  try {
    // Find the QR record by qrCode (not by id)
    const qrRecord = await prisma.studentQrCode.findFirst({
      where: { 
        qrCode: qrId,
        isActive: true 
      },      include: { 
        student: {
          include: {
            enrolledUnits: {
              include: {
                courseUnit: true  // Include course unit details
              }
            }
          }
        } 
      }
    });

    if (!qrRecord || !qrRecord.student) {
      res.status(404).json({ message: "Student not found for this QR code" });
      return;
    }

    res.json(qrRecord.student);
  } catch (error) {
    console.error("Error fetching student by QR:", error);
    res.status(500).json({ message: "Error fetching student details" });
  }
};

export const approveEnrolledCourseUnit: RequestHandler = async (req, res) => {
  const { enrolledCourseUnitId } = req.params;
  const { invigilatorId } = req.body; // Change from approvedBy to invigilatorId

  try {
    const updated = await prisma.enrolledCourseUnit.update({
      where: { id: enrolledCourseUnitId },
      data: {
        isInvigilatorApproved: true,
        invigilatorApprovedAt: new Date(),
        approvedBy: invigilatorId, // Use invigilator's ID instead of name
      },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to approve course unit", error });
  }
};

// Get all exams for a student on a specific date by QR code
export const getStudentExamsByDateByQrCode: RequestHandler = async (req, res) => {
  const { qrId } = req.params;
  const { date } = req.query; // Expecting date as YYYY-MM-DD

  if (!date) {
    res.status(400).json({ message: 'Missing date query parameter (YYYY-MM-DD)' });
    return;
  }

  try {
    // Find the QR record by qrCode with student and their enrolled units
    const qrRecord = await prisma.studentQrCode.findFirst({
      where: {
        qrCode: qrId,
        isActive: true
      },
      include: {
        student: {
          include: {
            enrolledUnits: {
              include: {
                courseUnit: true
              }
            }
          }
        }
      }
    });

    if (!qrRecord || !qrRecord.student) {
      res.status(404).json({ message: "Student not found for this QR code" });
      return;
    }

    const studentId = qrRecord.student.id;
    console.log('Found student:', studentId);
    console.log('Student has enrolled units:', qrRecord.student.enrolledUnits.length);

    // Parse the date and get start/end of day
    const dayStart = new Date(date as string);
    dayStart.setHours(0, 0, 0, 0);
    const dayEnd = new Date(date as string);
    dayEnd.setHours(23, 59, 59, 999);

    // Get all exams for enrolled course units on the given date with approval info
    const exams = await prisma.exam.findMany({
      where: {
        courseUnitId: {
          in: qrRecord.student.enrolledUnits.map(eu => eu.courseUnitId)
        },
        examDate: {
          gte: dayStart,
          lte: dayEnd
        }
      },
      include: {
        courseUnit: true
      }
    });

    console.log('Found exams:', exams.length);
    console.log('For date:', dayStart, 'to', dayEnd);

    // Return both exams and enrolled units
    res.json({
      exams,
      enrolledUnits: qrRecord.student.enrolledUnits
    });
  } catch (error) {
    console.error('Error fetching student exams by QR and date:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getStudentsApprovedByInvigilator: RequestHandler = async (req, res) => {
  const { invigilatorId } = req.params;
  
  try {
    const approvedUnits = await prisma.enrolledCourseUnit.findMany({
      where: {
        approvedBy: invigilatorId,
        isInvigilatorApproved: true
      },
      include: {
        student: {
          include: {
            programme: {
              include: {
                course: true
              }
            }
          }
        },
        courseUnit: true,
      },
      orderBy: {
        invigilatorApprovedAt: 'desc'
      }
    });

    // Group by date and transform data
    const groupedByDate = approvedUnits.reduce((acc: any, unit) => {
      const approvedDate = new Date(unit.invigilatorApprovedAt!).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      if (!acc[approvedDate]) {
        acc[approvedDate] = [];
      }      acc[approvedDate].push({
        enrolledUnitId: unit.id,
        regNo: unit.student.regNo,
        studentNo: unit.student.studentNo,
        courseUnit: {
          code: unit.courseUnit.code,
          title: unit.courseUnit.title
        },
        programme: unit.student.programme.course.name,
        approvedAt: unit.invigilatorApprovedAt
      });

      return acc;
    }, {});

    res.json(groupedByDate);
  } catch (error) {
    console.error('Error fetching students approved by invigilator:', error);
    res.status(500).json({ message: 'Failed to fetch approved students' });
  }
};