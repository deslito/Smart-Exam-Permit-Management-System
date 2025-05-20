/*
  Warnings:

  - Added the required column `type` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CourseType" AS ENUM ('Bachelor', 'Diploma', 'Master', 'Phd');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "type" "CourseType" NOT NULL;
