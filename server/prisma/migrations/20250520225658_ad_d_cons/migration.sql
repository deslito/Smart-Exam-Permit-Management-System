/*
  Warnings:

  - A unique constraint covering the columns `[courseUnitId,examDate]` on the table `Exam` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Exam_courseUnitId_examDate_key" ON "Exam"("courseUnitId", "examDate");
