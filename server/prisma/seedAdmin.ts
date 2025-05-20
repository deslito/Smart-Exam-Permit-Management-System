import prisma from '../config/prismaClient';
import { uploadImage } from '../utils/uploadImage';

const admins = [
  {
    email: 'admin@kyu.edu',
    firstName: 'Admin',
    lastName: 'User',
    otherNames: null,
    facultyOrSchool: 'School of Computing and Information Science', // Must match a Programme.facultyOrSchool
  },
  // Add more admins here if needed
];

async function main() {
  for (const admin of admins) {
    // Check if facultyOrSchool exists in FacultyOrSchool
    const exists = await prisma.facultyOrSchool.findFirst({
      where: { name: admin.facultyOrSchool }
    });
    if (!exists) {
      console.warn(`Faculty/School "${admin.facultyOrSchool}" does not exist in any Programme. Please create a Programme with this facultyOrSchool first.`);
      continue;
    }

    const adminUser = await prisma.user.findUnique({ where: { email: admin.email } });
    if (!adminUser) {
      console.warn(`Admin user not found. Please create a user with email ${admin.email} first.`);
      continue;
    }

    // Use lowercase image file from admin folder
    const imagePath = `assets/admin/${admin.firstName.toLowerCase()}.png`;
    const imageUrl = await uploadImage(imagePath, 'admins');

    await prisma.admin.upsert({
      where: { id: adminUser.id },
      update: {},
      create: {
        id: adminUser.id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        otherNames: admin.otherNames,
        picture: imageUrl,
        facultyOrSchoolId: exists.id, // <-- Use the ID, not the name
      },
    });

    console.log(`✅ Admin seeded: ${admin.email} | Faculty/School: ${admin.facultyOrSchool} | Cloudinary: ${imageUrl}`);
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());