import prisma from '../config/prismaClient';

async function main() {
  // Delete all course unit data (and cascade deletes related records if set in schema)
  await prisma.department.deleteMany({});
  console.log('All departments data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });