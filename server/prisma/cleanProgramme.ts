import prisma from '../config/prismaClient';

async function main() {
  // Delete all programme data (and cascade deletes related records if set in schema)
  await prisma.programme.deleteMany({});
  console.log('All programme data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  