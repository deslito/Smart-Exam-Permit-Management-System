/*
  Warnings:

  - Added the required column `facultyOrSchool` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "facultyOrSchool" TEXT NOT NULL;
