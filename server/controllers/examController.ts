// controllers/examController.ts
import { Request, Response } from "express";
import  prisma  from "../config/prismaClient"; // Adjust import as needed

export const getExamsByFaculty = async (req: Request, res: Response) => {
  const { facultyId } = req.params;

  try {
    const faculty = await prisma.facultyOrSchool.findUnique({
      where: { id: facultyId },
      include: {
        departments: {
          include: {
            courses: {
              include: {
                courseUnits: {
                  include: {
                    exams: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!faculty) {
      return res.status(404).json({ error: "Faculty not found." });
    }

    // Flatten nested exams and include course unit title
    const exams = faculty.departments.flatMap(dept =>
      dept.courses.flatMap(course =>
        course.courseUnits.flatMap(unit =>
          unit.exams.map(exam => ({
            ...exam,
            courseUnitTitle: unit.title
          }))
        )
      )
    );

    return res.status(200).json({ exams });
  } catch (error) {
    console.error("Error fetching exams by faculty:", error);
    return res.status(500).json({ error: "Internal server error." });
  }
};
