import prisma from '../config/prismaClient';
import { uploadImage } from '../utils/uploadImage';

const Invigilators = [
  {
    id: "I0001",
    title: "Ms.",
    firstName: "Sophia",
    lastName: "Nakirayi",
    otherNames: null,
    regNumber: "24/STAFF/002",
    email: "nakirayisophia@kyu.edu",
    role: "invigilator" as const,
    departmentId: "DE003",
  },
  {
    id: "I654321",
    title: "Dr.",
    firstName: "Joel",
    lastName: "Mugisha",
    otherNames: null,
    regNumber: "24/STAFF/001",
    email: "mugishajoel@kyu.edu",
    role: "invigilator" as const,

    departmentId: "DE003",
  }
];

async function main() {
  for (const inv of Invigilators) {
    const invUser = await prisma.user.findUnique({ where: { email: inv.email } });
    if (!invUser) {
      console.warn(`Invigilator user not found. Please create a user with email ${inv.email} first.`);
      continue;
    }

    // Generate invigilatorNumber: e.g., 012/INV/001
    const deptDigits = inv.departmentId.replace(/\D/g, '').padStart(3, '0');
    const count = await prisma.invigilator.count({
      where: { departmentId: inv.departmentId },
    });
    const nextNumber = (count + 1).toString().padStart(3, '0');
    const invigilatorNumber = `${deptDigits}/INV/${nextNumber}`;

    // Upload invigilator image to Cloudinary
    const imagePath = `assets/invigilators/${inv.firstName.toLowerCase()}.png`;
    const imageUrl = await uploadImage(imagePath, 'invigilators');

    await prisma.invigilator.upsert({
      where: { id: invUser.id },
      update: {},
      create: {
        id: invUser.id,
        invigilatorNumber,
        title: inv.title,
        firstName: inv.firstName,
        lastName: inv.lastName,
        otherNames: inv.otherNames,
        picture: imageUrl,
        departmentId: inv.departmentId,
      },
    });

    console.log(`✅ Invigilator seeded: ${inv.email} | Number: ${invigilatorNumber} | Department: ${inv.departmentId} | Cloudinary: ${imageUrl}`);
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());