/*
  Warnings:

  - Added the required column `helperId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "helperId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_helperId_fkey" FOREIGN KEY ("helperId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
