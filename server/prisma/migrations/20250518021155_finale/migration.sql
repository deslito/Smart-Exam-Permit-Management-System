/*
  Warnings:

  - You are about to drop the column `programmeId` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `programmeId` on the `CourseUnit` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[code,courseName]` on the table `CourseUnit` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseName` to the `CourseUnit` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_programmeId_fkey";

-- DropForeignKey
ALTER TABLE "CourseUnit" DROP CONSTRAINT "CourseUnit_programmeId_fkey";

-- DropIndex
DROP INDEX "CourseUnit_code_programmeId_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "programmeId";

-- AlterTable
ALTER TABLE "CourseUnit" DROP COLUMN "programmeId",
ADD COLUMN     "courseName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CourseUnit_code_courseName_key" ON "CourseUnit"("code", "courseName");

-- AddForeignKey
ALTER TABLE "CourseUnit" ADD CONSTRAINT "CourseUnit_courseName_fkey" FOREIGN KEY ("courseName") REFERENCES "Course"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
