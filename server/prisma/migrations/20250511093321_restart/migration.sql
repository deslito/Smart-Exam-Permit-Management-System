/*
  Warnings:

  - You are about to drop the column `department` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `facultyOrSchool` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `programme` on the `Student` table. All the data in the column will be lost.
  - Made the column `programmeId` on table `Student` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Student" DROP CONSTRAINT "Student_programmeId_fkey";

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "department",
DROP COLUMN "facultyOrSchool",
DROP COLUMN "programme",
ALTER COLUMN "programmeId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_programmeId_fkey" FOREIGN KEY ("programmeId") REFERENCES "Programme"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
