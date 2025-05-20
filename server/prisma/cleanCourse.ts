import prisma from '../config/prismaClient';

async function main() {
  // Delete all course data (and cascade deletes related records if set in schema)
  await prisma.course.deleteMany({});
  console.log('All course data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });