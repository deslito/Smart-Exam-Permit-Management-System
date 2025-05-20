/*
  Warnings:

  - You are about to drop the column `course` on the `Student` table. All the data in the column will be lost.
  - Added the required column `semester` to the `EnrolledCourseUnit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `EnrolledCourseUnit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "EnrolledCourseUnit" ADD COLUMN     "semester" "Semester" NOT NULL,
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "course";
