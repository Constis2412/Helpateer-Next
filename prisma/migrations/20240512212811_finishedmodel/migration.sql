/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sex` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_helperId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_sexId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Sex";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "post" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "location" VARCHAR(30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "dueTime" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,
    "helperId" TEXT NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usermodel" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "firstname" VARCHAR(20) NOT NULL,
    "lastname" VARCHAR(20) NOT NULL,
    "age" INTEGER NOT NULL,
    "disability" VARCHAR(255),
    "bio" VARCHAR(255),
    "hilfbeduerftig" BOOLEAN NOT NULL DEFAULT false,
    "genderId" TEXT NOT NULL,

    CONSTRAINT "usermodel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gender" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "gender_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usermodel_email_key" ON "usermodel"("email");

-- CreateIndex
CREATE UNIQUE INDEX "gender_name_key" ON "gender"("name");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "usermodel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_helperId_fkey" FOREIGN KEY ("helperId") REFERENCES "usermodel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usermodel" ADD CONSTRAINT "usermodel_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "gender"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
