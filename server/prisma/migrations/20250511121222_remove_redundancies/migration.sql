/*
  Warnings:

  - You are about to drop the column `department` on the `CourseUnit` table. All the data in the column will be lost.
  - You are about to drop the column `facultyOrSchool` on the `CourseUnit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code,programmeId]` on the table `CourseUnit` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "CourseUnit_code_key";

-- AlterTable
ALTER TABLE "CourseUnit" DROP COLUMN "department",
DROP COLUMN "facultyOrSchool";

-- CreateIndex
CREATE UNIQUE INDEX "CourseUnit_code_programmeId_key" ON "CourseUnit"("code", "programmeId");
