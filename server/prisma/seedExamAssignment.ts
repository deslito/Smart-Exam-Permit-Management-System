import prisma from '../config/prismaClient';

async function main() {
  // Get all exams
  const exams = await prisma.exam.findMany();
  // Get all invigilators
  const invigilators = await prisma.invigilator.findMany();

  // Simple round-robin assignment
  let invIndex = 0;
  for (const exam of exams) {
    const invigilator = invigilators[invIndex % invigilators.length];
    // Check if assignment exists
    const exists = await prisma.examAssignment.findFirst({
      where: {
        examId: exam.id,
        invigilatorId: invigilator.id
      }
    });
    if (exists) continue;

    await prisma.examAssignment.create({
      data: {
        examId: exam.id,
        invigilatorId: invigilator.id
      }
    });
    console.log(`✅ Assigned invigilator ${invigilator.firstName} to exam ${exam.id}`);
    invIndex++;
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());