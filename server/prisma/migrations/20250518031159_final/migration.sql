/*
  Warnings:

  - Added the required column `firstName` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "otherNames" TEXT;
