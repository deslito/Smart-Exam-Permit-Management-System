/*
  Warnings:

  - A unique constraint covering the columns `[studentId,courseUnitId,attempt]` on the table `EnrolledCourseUnit` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "EnrolledCourseUnit_studentId_courseUnitId_key";

-- AlterTable
ALTER TABLE "EnrolledCourseUnit" ADD COLUMN     "attempt" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "picture" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "EnrolledCourseUnit_studentId_courseUnitId_attempt_key" ON "EnrolledCourseUnit"("studentId", "courseUnitId", "attempt");
