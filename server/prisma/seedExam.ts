import prisma from '../config/prismaClient';

const SEMESTER = 'TWO'; // Only seed for semester two

function getTodayExamStartEnd() {
  const now = new Date();
  let start = new Date(now);
  start.setMinutes(0, 0, 0);
  start.setHours(now.getHours() + 1); // next full hour
  let end = new Date(start);
  end.setHours(start.getHours() + 3); // 3 hours duration
  return { start, end };
}

async function main() {
  const invigilators = await prisma.invigilator.findMany();
  const fallbackInvigilator = invigilators[0];
  const students = await prisma.student.findMany({
    include: { programme: { include: { course: true } } }
  });
  const courseUnits = await prisma.courseUnit.findMany({ where: { semester: SEMESTER } });

  // 1. Simulate 5 days: first 3 course units get today and previous days, rest get next consecutive weekdays
  const totalDays = 5;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Generate all exam days (previous 2, today, and next 2), skipping weekends
  let examDays: Date[] = [];
  // Previous 2 weekdays
  let prevDay = new Date(today);
  for (let i = 0; i < 2; i++) {
    do {
      prevDay.setDate(prevDay.getDate() - 1);
    } while (prevDay.getDay() === 0 || prevDay.getDay() === 6); // skip Sun/Sat
    examDays.unshift(new Date(prevDay));
  }
  // Today (if not weekend, else next weekday)
  let examToday = new Date(today);
  if (examToday.getDay() === 0 || examToday.getDay() === 6) {
    // If today is weekend, move to next Monday
    do {
      examToday.setDate(examToday.getDate() + 1);
    } while (examToday.getDay() === 0 || examToday.getDay() === 6);
  }
  examDays.push(new Date(examToday));
  // Next 2 weekdays
  let nextDay = new Date(examToday);
  for (let i = 0; i < 2; i++) {
    do {
      nextDay.setDate(nextDay.getDate() + 1);
    } while (nextDay.getDay() === 0 || nextDay.getDay() === 6);
    examDays.push(new Date(nextDay));
  }

  // For each day, schedule 1 course unit from each course (if available)
  // Map: courseName -> [courseUnits]
  const courseMap: Record<string, any[]> = {};
  for (const cu of courseUnits) {
    if (!cu.courseName) continue;
    if (!courseMap[cu.courseName]) courseMap[cu.courseName] = [];
    courseMap[cu.courseName].push(cu);
  }
  // For each day, for each course, schedule 1 course unit (if available)
  for (let dayIdx = 0; dayIdx < examDays.length; dayIdx++) {
    const examDate = examDays[dayIdx];
    if (!examDate || isNaN(new Date(examDate).getTime())) continue;
    for (const courseName in courseMap) {
      const cu = courseMap[courseName][dayIdx];
      if (!cu) continue;
      let startTime = new Date(examDate);
      startTime.setHours(9, 0, 0, 0);
      let endTime = new Date(examDate);
      endTime.setHours(12, 0, 0, 0);
      let isApproved = examDate < today;
      let approvedAt = isApproved ? new Date(startTime) : null;
      // Create or update exam
      let exam = await prisma.exam.upsert({
        where: {
          courseUnitId_examDate: {
            courseUnitId: cu.id,
            examDate: examDate,
          }
        },
        update: {
          startTime, endTime, isApproved, approvedAt, venue: 'Main Hall'
        },
        create: {
          courseUnitId: cu.id,
          examDate,
          startTime,
          endTime,
          isApproved,
          approvedAt,
          venue: 'Main Hall',
        }
      });
      // Assign any invigilator
      const assignedInvigilator = invigilators[Math.floor(Math.random() * invigilators.length)] || fallbackInvigilator;
      await prisma.examAssignment.upsert({
        where: {
          invigilatorId_examId: {
            invigilatorId: assignedInvigilator.id,
            examId: exam.id
          }
        },
        update: {},
        create: {
          invigilatorId: assignedInvigilator.id,
          examId: exam.id
        }
      });
    }
  }

  // 2. Enroll students for their course units for this semester (no approval yet)
  for (const student of students) {
    const { studyYear, programme } = student;
    const units = await prisma.courseUnit.findMany({
      where: {
        courseName: programme.course.name,
        year: studyYear,
        semester: SEMESTER
      }
    });
    // Only enroll for the course units that have an exam scheduled (first 3)
    for (const unit of units.slice(0, 3)) {
      // Enroll student if not already
      let enrolled = await prisma.enrolledCourseUnit.findFirst({
        where: { studentId: student.id, courseUnitId: unit.id }
      });
      if (!enrolled) {
        await prisma.enrolledCourseUnit.create({
          data: {
            studentId: student.id,
            courseUnitId: unit.id,
            year: unit.year,
            semester: unit.semester
          }
        });
      }
    }
  }

  console.log("✅ Exams, assignments, and enrollments seeded for semester TWO simulation (5 days, 1 course unit per course per day).");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });