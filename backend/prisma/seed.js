const { PrismaClient } = require('@prisma/client');

const dbClient = new PrismaClient();

const {
  coins,
  users,
  wallets,
  coinsInWallet,
} = require('../utilities/mockData');

async function seed() {
  console.log('seed load');

  for (const coin of coins) {
    await dbClient.coin.create({
      data: coin,
    });
  }

  for (const user of users) {
    await dbClient.user.create({
      data: user,
    });
  }

  for (const wallet of wallets) {
    await dbClient.wallet.create({
      data: wallet,
    });
  }

  for (const coinInWallet of coinsInWallet) {
    await dbClient.coinInWallet.create({
      data: coinInWallet,
    });
  }
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
