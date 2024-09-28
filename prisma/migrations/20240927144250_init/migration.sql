/*
  Warnings:

  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Todo";

-- CreateTable
CREATE TABLE "Tasks" (
    "id" SERIAL NOT NULL,
    "task" VARCHAR(255) NOT NULL,
    "priority" VARCHAR(255) NOT NULL,
    "completion_Date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tasks_pkey" PRIMARY KEY ("id")
);
