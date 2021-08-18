/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Coin` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Coin.name_unique" ON "Coin"("name");
