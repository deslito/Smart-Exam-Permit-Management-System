import prisma from '../config/prismaClient';
import { uploadImage } from '../utils/uploadImage';
import QRCode from 'qrcode';
import { Gender } from './client'; // Add this import at the top
import dotenv from "dotenv";
dotenv.config();

const BASE_URL = process.env.QR_BASE_URL || "http://localhost:8081/(invigilators)/qr";
console.log("BASE_URL", BASE_URL);

const students = [
  {
    email: 'asiimiretracy@gmail.com',
    firstName: 'Tracy',
    otherNames: null,
    lastName: 'Asiimire',
    gender: 'FEMALE',
    studyYear: 2,
    programme: 'DCED', // Use programme code for lookup
    campus: 'Main',
    academicYear: '2024/2025',
    currentSemester: 'TWO',
    course: 'Computer Engineering',
    paymentStatus: 'paid',
    permitStatus: 'valid',
  },
  {
    email: 'mubirutimothy@gmail.com',
    firstName: 'Timothy',
    otherNames: null,
    lastName: 'Mubiru',
    gender: 'MALE',
    studyYear: 2,
    programme: 'ITCD', // Use programme code for lookup
    campus: 'Main',
    academicYear: '2025/2026',
    currentSemester: 'TWO',
    paymentStatus: 'pending',
    permitStatus: 'invalid',
  },
  {
    email: 'twijukyedavid@gmail.com',
    firstName: 'David',
    otherNames: null,
    lastName: 'Twijukye',
    gender: 'MALE',
    studyYear: 3,
    programme: 'BBAD', // Use programme code for lookup
    campus: 'Main',
    academicYear: '2025/2026',
    currentSemester: 'TWO',
    paymentStatus: 'paid',
    permitStatus: 'valid',
  },
  {
    email: 'muyingocynthia@gmail.com',
    firstName: 'Cynthia',
    otherNames: 'Morgan',
    lastName: 'Muyingo',
    gender: 'FEMALE',
    studyYear: 1,
    programme: 'CEED',
    campus: 'Main',
    academicYear: '2025/2026',
    currentSemester: 'TWO',
    paymentStatus: 'pending',
    permitStatus: 'invalid',
  },
];

const ACADEMIC_YEAR = "2025/2026";
const ACADEMIC_YEAR_START = 2025; // first year in academic year

async function main() {
  // Track auto-increment per course+mode
  const studentCounters: Record<string, number> = {};

  for (const s of students) {
    const user = await prisma.user.findUnique({ where: { email: s.email } });
    if (!user) continue;

    if (!s.programme) {
      console.warn(`No programme specified for student ${s.email}`);
      continue;
    }
    const programme = await prisma.programme.findUnique({
      where: { name: s.programme },
      include: { course: true },
    });
    if (!programme) {
      console.warn(`Programme not found for student ${s.email}`);
      continue;
    }
    const course = programme.course;
    if (!course) {
      console.warn(`Course not found for student ${s.email}`);
      continue;
    }

    // Calculate year of enrollment
    const yearOfEnrollment = ACADEMIC_YEAR_START - (s.studyYear - 1);
    const yearShort = String(yearOfEnrollment).slice(-2);

    // CourseId last 3 digits
    const courseIdDigits = course.id.slice(-3);

    // Course code letters
    const courseCodeLetters = course.code.replace(/\d/g, '');

    // Study mode
    const isDay = programme.programme === 'DAY';
    const x = isDay ? '1' : '2';
    const P = isDay ? 'PD' : 'PE';

    // Counter key: courseId + mode
    const counterKey = `${course.id}_${x}`;
    studentCounters[counterKey] = (studentCounters[counterKey] || 0) + 1;
    const studentNum = String(studentCounters[counterKey]).padStart(3, '0');

    // Build studentNo and regNo
    const studentNo = `${yearShort}${courseIdDigits}${x}${studentNum}`;
    const regNo = `${yearShort}/${courseCodeLetters}/U/${studentNum}/${P}`;

    const imagePath = `assets/students/${s.firstName.toLowerCase()}.png`;
    const imageUrl = await uploadImage(imagePath, 'students');

    // Set permitStatus based on paymentStatus
    const permitStatus = s.paymentStatus === 'paid' ? 'valid' : 'invalid';

    await prisma.student.upsert({
      where: { id: user.id },
      update: {},
      create: {
        id: user.id,
        firstName: s.firstName,
        otherNames: s.otherNames,
        lastName: s.lastName,
        studentNo,
        regNo,
        gender: s.gender as Gender,
        studyYear: s.studyYear,
        campus: s.campus,
        academicYear: ACADEMIC_YEAR, // always 2024/2025
        currentSemester: s.currentSemester as any,
        picture: imageUrl,
        paymentStatus: s.paymentStatus as any,
        permitStatus, // computed
        programmeId: programme.id,
      },
    });
    console.log(`Seeded student: ${s.firstName} (${user.id}) | studentNo: ${studentNo} | regNo: ${regNo}`);

    // QR code logic for paid students (unchanged)
    if (s.paymentStatus === 'paid') {
      const existingQr = await prisma.studentQrCode.findUnique({
        where: {
          studentId_semester: {
            studentId: user.id,
            semester: s.currentSemester as any,
          },
        },
      });

      if (!existingQr) {
        const qrRecord = await prisma.studentQrCode.create({
          data: {
            studentId: user.id,
            qrCode: '',
            semester: s.currentSemester as any,
            issuedAt: new Date(),
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            isActive: true,
          },
        });

        const qrUrl = `${BASE_URL}/${qrRecord.id}`;
        const qrImageDataUrl = await QRCode.toDataURL(qrUrl);
        const qrImageCloudinaryUrl = await uploadImage(qrImageDataUrl, 'student-qrcodes');

        await prisma.studentQrCode.update({
          where: { id: qrRecord.id },
          data: { qrCode: qrImageCloudinaryUrl },
        });

        console.log(`✅ QR code generated and uploaded for: ${s.firstName} (${user.id})`);
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });