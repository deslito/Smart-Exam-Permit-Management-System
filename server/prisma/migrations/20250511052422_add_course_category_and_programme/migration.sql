/*
  Warnings:

  - Added the required column `programmeId` to the `CourseUnit` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CourseCategory" AS ENUM ('CORE', 'ELECTIVE');

-- AlterTable
ALTER TABLE "CourseUnit" ADD COLUMN     "category" "CourseCategory" NOT NULL DEFAULT 'CORE',
ADD COLUMN     "programmeId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "EnrolledCourseUnit" ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "qrCode" TEXT,
ADD COLUMN     "qrExpiresAt" TIMESTAMP(3),
ADD COLUMN     "qrIssuedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "programmeId" TEXT;

-- CreateTable
CREATE TABLE "Programme" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "facultyOrSchool" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "Programme_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Programme_name_key" ON "Programme"("name");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_programmeId_fkey" FOREIGN KEY ("programmeId") REFERENCES "Programme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseUnit" ADD CONSTRAINT "CourseUnit_programmeId_fkey" FOREIGN KEY ("programmeId") REFERENCES "Programme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
