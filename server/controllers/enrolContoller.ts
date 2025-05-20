import prisma from '../config/prismaClient'; // adjust path as needed

export async function enrollStudentInCourseUnit(studentId: string, courseUnitId: string) {
  const student = await prisma.student.findUnique({
    where: { id: studentId },
  });

  const courseUnit = await prisma.courseUnit.findUnique({
    where: { id: courseUnitId },
  });

  if (!student || !courseUnit) {
    throw new Error("Student or CourseUnit not found");
  }

  // Check if the student has previously enrolled in this course unit
  const previousEnrollment = await prisma.enrolledCourseUnit.findFirst({
    where: {
      studentId: studentId,
      courseUnitId: courseUnitId,
    },
    orderBy: { attempt: 'desc' },
  });

  if (previousEnrollment) {
    // Allow enrollment (retake)
    await prisma.enrolledCourseUnit.create({
      data: {
        studentId: studentId,
        courseUnitId: courseUnitId,
        attempt: previousEnrollment.attempt + 1,
        year: courseUnit.year,
        semester: courseUnit.semester,
      },
    });
    return { message: "Enrolled for retake." };
  }

  // Check if the course unit matches the student's current semester and year
  if (courseUnit.semester === student.currentSemester && courseUnit.year === student.studyYear) {
    // Allow enrollment
    await prisma.enrolledCourseUnit.create({
      data: {
        studentId: studentId,
        courseUnitId: courseUnitId,
        year: courseUnit.year,
        semester: courseUnit.semester,
      },
    });
    return { message: "Enrolled for current semester." };
  }

  throw new Error("Enrollment not allowed: Not current semester/year or a retake");
}
