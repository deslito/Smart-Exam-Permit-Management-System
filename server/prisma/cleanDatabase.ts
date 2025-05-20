import prisma from '../config/prismaClient';

async function main() {
  // Order matters due to foreign key constraints!
  await prisma.examAssignment.deleteMany({});
  await prisma.exam.deleteMany({});
  await prisma.enrolledCourseUnit.deleteMany({});
  await prisma.studentQrCode.deleteMany({});
  await prisma.student.deleteMany({});
  await prisma.invigilator.deleteMany({});
  await prisma.admin.deleteMany({});
  await prisma.courseUnit.deleteMany({});
  await prisma.programme.deleteMany({});
  await prisma.user.deleteMany({});

  console.log('✅ Database cleaned!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });