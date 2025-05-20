import prisma from '../config/prismaClient';
import bcrypt from 'bcrypt';

// Raw user data without IDs
interface RawUser {
  email: string;
  password: string;
  role: 'STUDENT' | 'INVIGILATOR' | 'ADMIN';
}

const rawAdmins: RawUser[] = [
  { email: 'admin@kyu.edu', password: 'admin', role: 'ADMIN' },
];

const rawStudents: RawUser[] = [
  { email: 'asiimiretracy@gmail.com', password: 'tracy', role: 'STUDENT' },
  { email: 'mubirutimothy@gmail.com', password: 'timothy', role: 'STUDENT' },
  { email: 'twijukyedavid@gmail.com', password: 'david', role: 'STUDENT' },
  { email: 'muyingocynthia@gmail.com', password: 'cynthia', role: 'STUDENT' },
];

const rawInvigilators: RawUser[] = [
  { email: 'nakirayisophia@kyu.edu', password: 'sophia', role: 'INVIGILATOR' },
  { email: 'mugishajoel@kyu.edu', password: 'joel', role: 'INVIGILATOR' },
];

// Helper to format ID with prefix and zero-padded number
function formatId(prefix: string, index: number) {
  return `${prefix}${(index + 1).toString().padStart(6, '0')}`;
}

async function main() {
  // Combine users with generated IDs
  const users = [
    ...rawAdmins.map((u, idx) => ({ id: formatId('A', idx), ...u })),
    ...rawStudents.map((u, idx) => ({ id: formatId('S', idx), ...u })),
    ...rawInvigilators.map((u, idx) => ({ id: formatId('I', idx), ...u })),
  ];

  for (const u of users) {
    const hashedPassword = await bcrypt.hash(u.password, 10);
    await prisma.user.upsert({
      where: { id: u.id },
      update: {},
      create: {
        id: u.id,
        email: u.email,
        password: hashedPassword,
        role: u.role as any,
      },
    });
    console.log(`Seeded user: ${u.email} with ID ${u.id}`);
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
