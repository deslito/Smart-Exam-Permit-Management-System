/*
  Warnings:

  - You are about to drop the column `qrCode` on the `Student` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "qrCode";

-- CreateTable
CREATE TABLE "StudentQrCode" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "qrCode" TEXT NOT NULL,
    "semester" "Semester" NOT NULL,
    "issuedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "StudentQrCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StudentQrCode_studentId_semester_idx" ON "StudentQrCode"("studentId", "semester");

-- AddForeignKey
ALTER TABLE "StudentQrCode" ADD CONSTRAINT "StudentQrCode_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
