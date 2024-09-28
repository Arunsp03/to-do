/*
  Warnings:

  - Added the required column `completion_Date` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority` to the `Todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "completion_Date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "priority" VARCHAR(255) NOT NULL;
