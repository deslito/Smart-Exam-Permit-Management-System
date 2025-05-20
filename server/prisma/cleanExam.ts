import prisma from '../config/prismaClient';

async function main() {
  // Delete all exam data (and cascade deletes related records if set in schema)
  await prisma.exam.deleteMany({});
  console.log('All exam data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });