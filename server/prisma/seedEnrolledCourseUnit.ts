import prisma from "../config/prismaClient";
import { Semester } from "@prisma/client";

const SEMESTERS: Semester[] = [Semester.ONE, Semester.TWO];

function getExamDates(numDays: number) {
  // Returns an array of the previous (numDays-1) weekdays + today
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  let dates: Date[] = [];
  let d = new Date(today);
  let count = 0;
  while (dates.length < numDays - 1) {
    d.setDate(d.getDate() - 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      dates.unshift(new Date(d));
    }
  }
  dates.push(new Date(today));
  return dates;
}

async function main() {
  const invigilators = await prisma.invigilator.findMany();
  const fallbackInvigilator = invigilators[0];

  // Get all students with their programme (which includes course)
  const students = await prisma.student.findMany({
    include: { programme: { include: { course: true } } },
  });

  // Get all course units for the semester
  const courseUnits = await prisma.courseUnit.findMany();

  // Simulate 3 exam days (2 previous weekdays + today)
  const examDates = getExamDates(3);

  for (const student of students) {
    let enrolledCount = 0;
    const programme = student.programme;
    if (!programme || !programme.course) continue;

    for (let year = 1; year <= student.studyYear; year++) {
      for (const semester of SEMESTERS) {
        // Only enroll up to the current semester in the current year
        if (year === student.studyYear && semester > student.currentSemester) continue;

        // Get all course units for this student's course, year, and semester
        const units = await prisma.courseUnit.findMany({
          where: {
            courseName: programme.course.name,
            year,
            semester,
          },
        });

        // For each course unit, simulate a paper per day (weekday only)
        for (let i = 0; i < units.length; i++) {
          const unit = units[i];
          // Determine which exam day this unit is for
          // If more units than days, assign future days (simulate one paper per day)
          const examDayIndex = i < examDates.length ? i : examDates.length - 1;
          const examDate = examDates[examDayIndex];

          // Check if already enrolled (retake logic)
          const previous = await prisma.enrolledCourseUnit.findFirst({
            where: {
              studentId: student.id,
              courseUnitId: unit.id,
            },
            orderBy: { attempt: "desc" },
          });

          const attempt = previous ? previous.attempt + 1 : 1;

          // Approval logic: first two days are approved, today and future are not
          let isInvigilatorApproved = false;
          let invigilatorApprovedAt: Date | null = null;
          let approvedBy: string | null = null;

          if (examDayIndex < 2) {
            isInvigilatorApproved = true;
            invigilatorApprovedAt = examDate;
            approvedBy = fallbackInvigilator?.id || null;
          }

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
              isInvigilatorApproved,
              invigilatorApprovedAt,
              approvedBy,
            },
            update: {
              year: unit.year,
              semester: unit.semester,
              isInvigilatorApproved,
              invigilatorApprovedAt,
              approvedBy,
            },
          });
          enrolledCount++;
        }
      }
    }

    console.log(`Student: ${student.firstName} ${student.lastName}`);
    console.log(`Reg No: ${student.regNo}`);
    console.log(`Course Units Enrolled: ${enrolledCount}`);
    console.log('------------------------');
  }

  console.log("✅ EnrolledCourseUnits seeded for all students and all course units up to their current year/semester, with approval simulation.");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
