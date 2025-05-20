-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('paid', 'pending');

-- CreateEnum
CREATE TYPE "PermitStatus" AS ENUM ('valid', 'invalid');

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'pending',
ADD COLUMN     "permitStatus" "PermitStatus" NOT NULL DEFAULT 'invalid';
