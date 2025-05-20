/*
  Warnings:

  - You are about to drop the column `facultyOrSchool` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `otherNames` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `courseName` on the `Programme` table. All the data in the column will be lost.
  - You are about to drop the column `department` on the `Programme` table. All the data in the column will be lost.
  - You are about to drop the column `facultyOrSchool` on the `Programme` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[invigilatorNumber]` on the table `Invigilator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `facultyOrSchoolId` to the `Admin` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invigilatorNumber` to the `Invigilator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `Programme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "facultyOrSchool",
DROP COLUMN "firstName",
DROP COLUMN "otherNames",
ADD COLUMN     "facultyOrSchoolId" TEXT NOT NULL,
ADD COLUMN     "programmeId" TEXT;

-- AlterTable
ALTER TABLE "Invigilator" ADD COLUMN     "invigilatorNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Programme" DROP COLUMN "courseName",
DROP COLUMN "department",
DROP COLUMN "facultyOrSchool",
ADD COLUMN     "courseId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "gender" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "FacultyOrSchool" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "FacultyOrSchool_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "facultyOrSchoolId" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FacultyOrSchool_name_key" ON "FacultyOrSchool"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Course_code_key" ON "Course"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Invigilator_invigilatorNumber_key" ON "Invigilator"("invigilatorNumber");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_facultyOrSchoolId_fkey" FOREIGN KEY ("facultyOrSchoolId") REFERENCES "FacultyOrSchool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_programmeId_fkey" FOREIGN KEY ("programmeId") REFERENCES "Programme"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Programme" ADD CONSTRAINT "Programme_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_facultyOrSchoolId_fkey" FOREIGN KEY ("facultyOrSchoolId") REFERENCES "FacultyOrSchool"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
