import prisma from '../config/prismaClient';

const SEMESTER = 'ONE'; // or 'TWO', as needed

function getExamDates() {
  const today = new Date();
  let dates: Date[] = [];
  let day = today.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

  function prevWeekday(date: Date, skip: number = 1) {
    let d = new Date(date);
    for (let i = 0; i < skip; i++) {
      do {
        d.setDate(d.getDate() - 1);
      } while (d.getDay() === 0 || d.getDay() === 6);
    }
    return d;
  }

  function nextWeekday(date: Date, skip: number = 1) {
    let d = new Date(date);
    for (let i = 0; i < skip; i++) {
      do {
        d.setDate(d.getDate() + 1);
      } while (d.getDay() === 0 || d.getDay() === 6);
    }
    return d;
  }

  if (day === 1) { // Monday
    dates = [
      prevWeekday(today, 2), // Thursday
      prevWeekday(today, 1), // Friday
      today                  // Monday
    ];
  } else if (day === 0) { // Sunday
    dates = [
      prevWeekday(today, 2), // Thursday
      prevWeekday(today, 1), // Friday
      nextWeekday(today, 1)  // Monday
    ];
  } else {
    dates = [
      prevWeekday(today, 2),
      prevWeekday(today, 1),
      today
    ];
  }
  return dates.sort((a, b) => a.getTime() - b.getTime());
}

async function main() {
  // Fetch once at the top
  const invigilators = await prisma.invigilator.findMany();
  let fallbackInvigilator = await prisma.invigilator.findFirst({
    where: { firstName: "John", lastName: "Doe" }
  });
  const students = await prisma.student.findMany({
    include: {
      programme: { include: { course: true } }
    }
  });

  const courseUnits = await prisma.courseUnit.findMany({
    where: { semester: SEMESTER }
  });

  const examDates = getExamDates();

  // 1. Create exams for all course units in this semester
  for (const cu of courseUnits) {
    for (let i = 0; i < 3; i++) {
      // Check if exam already exists for this course unit and date
      const examDate = new Date(examDates[i]);
      const exists = await prisma.exam.findFirst({
        where: {
          courseUnitId: cu.id,
          examDate: {
            gte: new Date(examDate.setHours(0, 0, 0, 0)),
            lte: new Date(examDate.setHours(23, 59, 59, 999))
          }
        }
      });
      if (exists) continue;

      const startTime = new Date(examDate);
      startTime.setHours(9, 0, 0, 0);
      const endTime = new Date(examDate);
      endTime.setHours(12, 0, 0, 0);

      await prisma.exam.create({
        data: {
          courseUnitId: cu.id,
          examDate,
          startTime,
          endTime,
          venue: 'Main Hall',
        }
      });
      console.log(`✅ Exam created for ${cu.code} (${cu.title}) on ${examDate.toDateString()}`);
    }
  }

  // 2. Assign invigilators and approve students for past exams
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

      // Find the exam for this course unit and date (should exist from above)
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

      // Enroll student in this course unit if not already
      let enrolled = await prisma.enrolledCourseUnit.findFirst({
        where: {
          studentId: student.id,
          courseUnitId: unit.id
        }
      });
      if (!enrolled) {
        enrolled = await prisma.enrolledCourseUnit.create({
          data: {
            studentId: student.id,
            courseUnitId: unit.id,
            year: unit.year,
            semester: unit.semester
          }
        });
      }

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

  // Get all students with their programme and course
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (const student of students) {
    const { studyYear, currentSemester, programme } = student;
    const courseUnits = await prisma.courseUnit.findMany({
      where: {
        courseName: programme.course.name,
        year: studyYear,
        semester: currentSemester
      }
    });

    for (const unit of courseUnits) {
      // Find the exam for this course unit
      const exam = await prisma.exam.findFirst({
        where: { courseUnitId: unit.id }
      });
      if (!exam) continue;

      // Only consider exams before today
      const examDay = new Date(exam.examDate);
      examDay.setHours(0, 0, 0, 0);
      if (examDay >= today) continue;

      // Find enrolledCourseUnit
      let enrolled = await prisma.enrolledCourseUnit.findFirst({
        where: {
          studentId: student.id,
          courseUnitId: unit.id
        }
      });
      if (!enrolled) continue;

      // Randomly decide if this student is approved (e.g., 70% chance)
      if (Math.random() < 0.7) {
        // Find invigilators in department
        const deptInvigilators = await prisma.invigilator.findMany({
          where: { departmentId: programme.course.departmentId }
        });
        let assignedInvigilator = deptInvigilators.length
          ? deptInvigilators[Math.floor(Math.random() * deptInvigilators.length)]
          : fallbackInvigilator;

        await prisma.enrolledCourseUnit.update({
          where: { id: enrolled.id },
          data: {
            isInvigilatorApproved: true,
            invigilatorApprovedAt: exam.examDate,
            approvedBy: assignedInvigilator ? assignedInvigilator.id : null
          }
        });
        console.log(`Approved student ${student.firstName} for ${unit.title} on ${exam.examDate.toDateString()} by ${assignedInvigilator?.firstName || 'N/A'}`);
      }
    }
  }

  console.log("✅ Exams, assignments, and approvals seeded.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });