/*
  Warnings:

  - You are about to drop the `coinInWallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "coinInWallet" DROP CONSTRAINT "coinInWallet_coinId_fkey";

-- DropForeignKey
ALTER TABLE "coinInWallet" DROP CONSTRAINT "coinInWallet_walletId_fkey";

-- DropTable
DROP TABLE "coinInWallet";

-- CreateTable
CREATE TABLE "CoinInWallet" (
    "id" SERIAL NOT NULL,
    "walletId" INTEGER NOT NULL,
    "coinId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CoinInWallet" ADD FOREIGN KEY ("walletId") REFERENCES "Wallet"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoinInWallet" ADD FOREIGN KEY ("coinId") REFERENCES "Coin"("id") ON DELETE CASCADE ON UPDATE CASCADE;
