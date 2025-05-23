import prisma from '../config/prismaClient';
import { studentData } from './studentData';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import QRCode from 'qrcode';
dotenv.config();

const SHARED_STUDY_YEAR = 1;
const SHARED_PROGRAMME_NAME = 'BSCIT'; // or use programme ID directly
const ACADEMIC_YEAR = '2025/2026';
const SEMESTER = 'TWO';
const DEFAULT_CAMPUS = 'Main';
const PAYMENT_STATUS = 'paid';
const PERMIT_STATUS = 'valid';

async function main() {
  console.log('📦 Starting student seed process...');
  // Use 'name' instead of 'code' for Programme lookup
  const programme = await prisma.programme.findUnique({
    where: { name: SHARED_PROGRAMME_NAME },
  });

  if (!programme) {
    console.error('❌ Programme not found. Check SHARED_PROGRAMME_NAME.');
    return;
  }

  const imagesDir = path.join(__dirname, 'studentImages');
  const imageFiles = fs.readdirSync(imagesDir)
    .filter((file) => /\.(png|jpg|jpeg)$/i.test(file))
    .sort();

  if (imageFiles.length < studentData.length) {
    console.warn('⚠️ Fewer images than students. Some students will not have pictures.');
  }

  for (let i = 0; i < studentData.length; i++) {
    const s = studentData[i];
    const userId = s.studentNumber;
    const hashedPassword = await bcrypt.hash(s.password, 10);

    // Create or update user
    await prisma.user.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        email: s.email,
        password: hashedPassword,
        role: 'STUDENT',
      },
    });

    const imageName = imageFiles[i] || null;
    const imagePath = imageName ? path.join(imagesDir, imageName) : null;
    const imageUrl = imagePath ? await uploadImage(imagePath, 'students') : null;

    // Normalize gender enum
    const genderEnum = s.gender.toUpperCase() === 'MALE' ? 'MALE' : 'FEMALE';

    await prisma.student.upsert({
      where: { id: userId },
      update: {},
      create: {
        id: userId,
        firstName: s.firstName,
        lastName: s.lastName,
        studentNo: s.studentNumber,
        regNo: s.registrationNumber,
        gender: genderEnum,
        studyYear: SHARED_STUDY_YEAR,
        programmeId: programme.id,
        academicYear: ACADEMIC_YEAR,
        currentSemester: SEMESTER,
        campus: DEFAULT_CAMPUS,
        paymentStatus: PAYMENT_STATUS,
        permitStatus: PERMIT_STATUS,
        picture: imageUrl,
      },
    });

    // Generate and upload QR code for paid students
    if (PAYMENT_STATUS === 'paid') {
      let qrRecord = await prisma.studentQrCode.findUnique({
        where: {
          studentId_semester: {
            studentId: userId,
            semester: SEMESTER,
          },
        },
      });
      if (!qrRecord) {
        qrRecord = await prisma.studentQrCode.create({
          data: {
            studentId: userId,
            qrCode: '',
            semester: SEMESTER,
            issuedAt: new Date(),
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            isActive: true,
          },
        });
      }
      const BASE_URL = process.env.QR_BASE_URL || 'http://localhost:8081/(invigilators)/qr';
      const qrUrl = `${BASE_URL}/${qrRecord.id}`;
      const qrImageDataUrl = await QRCode.toDataURL(qrUrl);
      const qrImageCloudinaryUrl = await uploadImage(qrImageDataUrl, 'student-qrcodes');
      await prisma.studentQrCode.update({
        where: { id: qrRecord.id },
        data: { qrCode: qrImageCloudinaryUrl },
      });
    }

    console.log(`✅ Seeded: ${s.firstName} ${s.lastName} | ${s.registrationNumber}`);
  }

  console.log('🎉 All students seeded successfully.');
}

async function uploadImage(localPath: string, folder: string): Promise<string> {
  // Replace this with actual Cloudinary, S3, or local URL logic
  return `https://dummy.cloud/${folder}/${path.basename(localPath)}`;
}

main()
  .catch((err) => {
    console.error('❌ Error during seeding:', err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
