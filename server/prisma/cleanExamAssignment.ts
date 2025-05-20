import prisma from '../config/prismaClient';

async function main() {
  // Delete all exam assignment data (and cascade deletes related records if set in schema)
  await prisma.examAssignment.deleteMany({});
  console.log('All exam assignment data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });