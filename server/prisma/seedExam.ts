import prisma from '../config/prismaClient';
import { Semester } from '@prisma/client';

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
  // Get all distinct combinations of study year and current semester
  const distinctYearSemesters = await prisma.student.findMany({
    distinct: ['studyYear', 'currentSemester'],
    select: { 
      studyYear: true,
      currentSemester: true 
    }
  });

  const invigilators = await prisma.invigilator.findMany();
  const fallbackInvigilator = invigilators[0];

  // Process each active year-semester combination
  for (const { studyYear, currentSemester } of distinctYearSemesters) {
    console.log(`🔍 Creating exams for Year ${studyYear}, Semester ${currentSemester}`);
    
    // Get course units for this year and semester
    const courseUnits = await prisma.courseUnit.findMany({
      where: {
        year: studyYear,
        semester: currentSemester
      },
      include: {
        course: true
      }
    });

    // Group course units by course
    const courseMap: Record<string, any[]> = {};
    for (const unit of courseUnits) {
      if (!courseMap[unit.courseName]) {
        courseMap[unit.courseName] = [];
      }
      courseMap[unit.courseName].push(unit);
    }

    // Generate exam dates (2 past days, today, 2 future days)
    const today = new Date();
    const examDays = [];
    for (let i = -2; i <= 2; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) { // Skip weekends
        examDays.push(date);
      }
    }

    // Create exams for each day
    for (let dayIdx = 0; dayIdx < examDays.length; dayIdx++) {
      const examDate = examDays[dayIdx];
      
      for (const courseName in courseMap) {
        const units = courseMap[courseName];
        const unit = units[dayIdx % units.length]; // Cycle through units if more days than units
        if (!unit) continue;

        const { start: startTime, end: endTime } = getTodayExamStartEnd();
        startTime.setDate(examDate.getDate());
        endTime.setDate(examDate.getDate());

        const exam = await prisma.exam.upsert({
          where: {
            courseUnitId_examDate: {
              courseUnitId: unit.id,
              examDate: examDate,
            }
          },
          create: {
            courseUnitId: unit.id,
            examDate,
            startTime,
            endTime,
            venue: `Room ${Math.floor(Math.random() * 10) + 1}`,
            isApproved: examDate < today,
            approvedAt: examDate < today ? startTime : null
          },
          update: {}
        });

        // Assign random invigilator
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

    console.log(`✅ Exams and assignments seeded for Year ${studyYear}, Semester ${currentSemester} (${examDays.length} days)`);
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });