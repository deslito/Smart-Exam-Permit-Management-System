-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "picture" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Invigilator" ALTER COLUMN "picture" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "StudentQrCode" ALTER COLUMN "qrCode" DROP NOT NULL;
