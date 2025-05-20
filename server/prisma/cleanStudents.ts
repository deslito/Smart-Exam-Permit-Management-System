import prisma from '../config/prismaClient';

async function main() {
  // First delete QR codes that reference students
  await prisma.studentQrCode.deleteMany({});
  console.log('All QR codes deleted.');

  // Then delete enrolled course units that reference students
  await prisma.enrolledCourseUnit.deleteMany({});
  console.log('All enrolled course units deleted.');

  // Finally delete the students
  await prisma.student.deleteMany({});
  console.log('All students deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });