import prisma from "../config/prismaClient";

import { Semester } from "@prisma/client";
const SEMESTERS: Semester[] = [Semester.ONE, Semester.TWO];

async function main() {
  // Get all students with their programme (which includes course)
  const students = await prisma.student.findMany({
    include: { programme: { include: { course: true } } },
  });

  for (const student of students) {
    const programme = student.programme;
    if (!programme || !programme.course) continue;

    for (let year = 1; year <= student.studyYear; year++) {
      for (const semester of SEMESTERS) {
        // Only enroll up to the current semester in the current year
        if (year === student.studyYear && semester > student.currentSemester) continue;

        // Get all course units for this student's course, year, and semester
        const courseUnits = await prisma.courseUnit.findMany({
          where: {
            courseName: programme.course.name,
            year,
            semester,
          },
        });

        for (const unit of courseUnits) {
          // Check if already enrolled (retake logic)
          const previous = await prisma.enrolledCourseUnit.findFirst({
            where: {
              studentId: student.id,
              courseUnitId: unit.id,
            },
            orderBy: { attempt: "desc" },
          });

          const attempt = previous ? previous.attempt + 1 : 1;

          // Only enroll if not already enrolled for this attempt
          await prisma.enrolledCourseUnit.upsert({
            where: {
              studentId_courseUnitId_attempt: {
                studentId: student.id,
                courseUnitId: unit.id,
                attempt,
              },
            },
            create: {
              studentId: student.id,
              courseUnitId: unit.id,
              attempt,
              year: unit.year,
              semester: unit.semester,
              isInvigilatorApproved: false,
              invigilatorApprovedAt: null,
              approvedBy: null,
            },
            update: {},
          });
        }
      }
    }
  }

  console.log("✅ EnrolledCourseUnits seeded for all students and all course units up to their current year/semester.");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
