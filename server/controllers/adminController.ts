import prisma from "../config/prismaClient";
import { Request, RequestHandler, Response } from "express";

export const getAllAdmins: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const admins = await prisma.admin.findMany({
    include: {
      facultyOrSchool: {
        include: {
          departments: {
            include: {
              courses: {
                include: {
                  courseUnits: {
                    include: {
                      course: {
                        select: {
                          code: true,
                          name: true,
                        },
                      },
                      exams: true,
                      enrolledBy: {
                        include: {
                          student: {
                            include: {
                              programme: true,
                              enrolledUnits: {
                                include: {
                                  courseUnit: true,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  res.json(admins);
};

export const getAdminById: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const admin = await prisma.admin.findUnique({
    where: { id },
    include: {
      facultyOrSchool: {
        include: {
          departments: {
            include: {
              courses: {
                include: {
                  courseUnits: {
                    include: {
                      course: {
                        select: {
                          code: true,
                          name: true,
                        },
                      },
                      exams: true,
                      enrolledBy: {
                        include: {
                          student: {
                            include: {
                              programme: true,
                              enrolledUnits: {
                                include: {
                                  courseUnit: true,
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!admin) {
    res.status(404).json({ message: "Admin not found" });
    return;
  }
  res.json(admin);
};

export const approveExam: RequestHandler = async (req, res) => {
  const { examId } = req.params;
  try {
    // Fetch the exam first
    const exam = await prisma.exam.findUnique({ where: { id: examId } });
    if (!exam) {
      res.status(404).json({ message: "Exam not found" });
      return;
    }
    if (exam.isApproved) {
      res.status(400).json({ message: "Exam is already approved" });
      return;
    }
    // Set startTime to next full hour, endTime to 3 hours later
    const now = new Date();
    let startTime = new Date(now);
    startTime.setMinutes(0, 0, 0);
    startTime.setHours(now.getHours() + 1);
    let endTime = new Date(startTime);
    endTime.setHours(startTime.getHours() + 3);
    const updated = await prisma.exam.update({
      where: { id: examId },
      data: {
        isApproved: true,
        approvedAt: now,
        startTime,
        endTime,
      },
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to approve exam", error });
  }
};
