import prisma from '../config/prismaClient';

async function main() {
  // Delete all invigilator data (and cascade deletes related records if set in schema)
  await prisma.invigilator.deleteMany({});
  console.log('All invigilator data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });