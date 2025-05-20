/*
  Warnings:

  - Added the required column `departmentId` to the `Invigilator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Invigilator" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Invigilator" ADD CONSTRAINT "Invigilator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
