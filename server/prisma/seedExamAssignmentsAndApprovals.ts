import prisma from "../config/prismaClient";

async function main() {
  // Get all invigilators with their department
  const invigilators = await prisma.invigilator.findMany();

  // Get all students with their programme and course
  const students = await prisma.student.findMany({
    include: {
      programme: { include: { course: true } }
    }
  });

  for (const student of students) {
    const { studyYear, currentSemester, programme, permitStatus } = student;
    const courseUnits = await prisma.courseUnit.findMany({
      where: {
        courseName: programme.course.name,
        year: studyYear,
        semester: currentSemester
      }
    });

    // Only consider the first 3 course units (the 3 exams)
    const examUnits = courseUnits.slice(0, 3);

    for (let i = 0; i < examUnits.length; i++) {
      const unit = examUnits[i];

      // Find the exam for this course unit and date (should exist from seedExam.ts)
      const exam = await prisma.exam.findFirst({
        where: { courseUnitId: unit.id }
      });
      if (!exam) continue;

      // Assign invigilator randomly from department
      const deptInvigilators = invigilators.filter(
        inv => inv.departmentId === programme.course.departmentId
      );
      let assignedInvigilator = deptInvigilators.length
        ? deptInvigilators[Math.floor(Math.random() * deptInvigilators.length)]
        : null;

      if (assignedInvigilator) {
        // Create ExamAssignment if not exists
        const exists = await prisma.examAssignment.findFirst({
          where: {
            examId: exam.id,
            invigilatorId: assignedInvigilator.id
          }
        });
        if (!exists) {
          await prisma.examAssignment.create({
            data: {
              examId: exam.id,
              invigilatorId: assignedInvigilator.id
            }
          });
        }
      }

      // Find enrolledCourseUnit
      let enrolled = await prisma.enrolledCourseUnit.findFirst({
        where: {
          studentId: student.id,
          courseUnitId: unit.id
        }
      });
      if (!enrolled) continue;

      // For past exams (first two), approve if permitStatus is valid
      if (i < 2 && permitStatus === "valid") {
        await prisma.enrolledCourseUnit.update({
          where: { id: enrolled.id },
          data: {
            isInvigilatorApproved: true,
            invigilatorApprovedAt: new Date(),
            approvedBy: assignedInvigilator ? assignedInvigilator.id : null
          }
        });
      }
      // For the 3rd/current exam, leave approval as false
    }
  }

  console.log("✅ Exam assignments and approvals seeded.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });