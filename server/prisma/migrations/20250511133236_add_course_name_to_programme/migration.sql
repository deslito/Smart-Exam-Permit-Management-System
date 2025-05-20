/*
  Warnings:

  - Added the required column `courseName` to the `Programme` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Programme" ADD COLUMN     "courseName" TEXT NOT NULL;
