import prisma from '../config/prismaClient';

async function main() {
  // Delete all admin unit data (and cascade deletes related records if set in schema)
  await prisma.admin.deleteMany({});
  console.log('All admin data deleted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });