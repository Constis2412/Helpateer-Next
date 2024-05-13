-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_helperId_fkey";

-- AlterTable
ALTER TABLE "post" ALTER COLUMN "helperId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_helperId_fkey" FOREIGN KEY ("helperId") REFERENCES "usermodel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
