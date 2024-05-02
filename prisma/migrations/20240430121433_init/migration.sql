/*
  Warnings:

  - You are about to drop the `Mensch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Mensch";

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "dueTime" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "firstname" VARCHAR(20) NOT NULL,
    "lastname" VARCHAR(20) NOT NULL,
    "age" INTEGER NOT NULL,
    "disability" TEXT,
    "bio" VARCHAR(255),
    "hilfbeduerftig" BOOLEAN NOT NULL DEFAULT false,
    "sexId" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sex" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sex_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_sexId_key" ON "User"("sexId");

-- CreateIndex
CREATE UNIQUE INDEX "Sex_name_key" ON "Sex"("name");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sexId_fkey" FOREIGN KEY ("sexId") REFERENCES "Sex"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
