/*
  Warnings:

  - You are about to drop the column `isApproved` on the `EnrolledCourseUnit` table. All the data in the column will be lost.
  - You are about to drop the column `qrCode` on the `EnrolledCourseUnit` table. All the data in the column will be lost.
  - You are about to drop the column `qrExpiresAt` on the `EnrolledCourseUnit` table. All the data in the column will be lost.
  - You are about to drop the column `qrIssuedAt` on the `EnrolledCourseUnit` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "EnrolledCourseUnit" DROP COLUMN "isApproved",
DROP COLUMN "qrCode",
DROP COLUMN "qrExpiresAt",
DROP COLUMN "qrIssuedAt",
ADD COLUMN     "approvedBy" TEXT,
ADD COLUMN     "invigilatorApprovedAt" TIMESTAMP(3),
ADD COLUMN     "isInvigilatorApproved" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "isApproved" BOOLEAN NOT NULL DEFAULT false;
