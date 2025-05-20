/*
  Warnings:

  - A unique constraint covering the columns `[studentId,semester]` on the table `StudentQrCode` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "StudentQrCode_studentId_semester_idx";

-- CreateIndex
CREATE UNIQUE INDEX "StudentQrCode_studentId_semester_key" ON "StudentQrCode"("studentId", "semester");
