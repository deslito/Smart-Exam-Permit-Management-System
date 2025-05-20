import prisma from '../config/prismaClient';

const faculties = [
  "Faculty of Engineering",
  "Faculty of Science",
  "Faculty of Agriculture",
  "Faculty of Special Needs & Rehabilitation",
  "Faculty of Arts and Humanities",
  "Faculty of Social Sciences",
];

const schools = [
  "School of Built Environment",
  "School of Vocational Studies",
  "School of Computing and Information Science",
  "School of Education",
  "School of Art and Industrial Design",
  "School of Management and Entrepreneurship",
];

async function main() {
  // Seed faculties with IDs FC001, FC002, ...
  for (let i = 0; i < faculties.length; i++) {
    const id = `FC${String(i + 1).padStart(3, "0")}`;
    await prisma.facultyOrSchool.upsert({
      where: { id },
      update: {},
      create: { id, name: faculties[i] },
    });
    console.log(`Seeded: ${faculties[i]} (${id})`);
  }

  // Seed schools with IDs SC001, SC002, ...
  for (let i = 0; i < schools.length; i++) {
    const id = `SC${String(i + 1).padStart(3, "0")}`;
    await prisma.facultyOrSchool.upsert({
      where: { id },
      update: {},
      create: { id, name: schools[i] },
    });
    console.log(`Seeded: ${schools[i]} (${id})`);
  }

  console.log('FacultyOrSchool seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
