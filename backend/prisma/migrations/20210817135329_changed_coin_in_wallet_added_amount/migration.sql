/*
  Warnings:

  - Added the required column `amount` to the `coinInWallet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "coinInWallet" ADD COLUMN     "amount" INTEGER NOT NULL;
