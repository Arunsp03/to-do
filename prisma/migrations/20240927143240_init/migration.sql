-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "task" VARCHAR(255) NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
