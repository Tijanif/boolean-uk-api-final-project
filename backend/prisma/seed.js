const { PrismaClient } = require('@prisma/client');

const dbClient = new PrismaClient();

const { coins, users, wallets } = require('../utilities/mockData');

async function seed() {
  console.log('seed load');

  const createdUsers = await Promise.all(
    users.map(async (user) => {
      return await dbClient.user.create({
        data: user,
      });
    })
  );

  const createdWallets = await Promise.all(
    wallets.map(async (wallet) => {
      return await dbClient.wallet.create({
        data: { user: { connect: { id: parseInt(wallet.userId) } } },
      });
    })
  );

  const createdCoins = await Promise.all(
    coins.map(async (coin) => {
      return await dbClient.coin.create({
        data: coin,
      });
    })
  );

  const createdCoinsInWallet = await dbClient.wallet.update({
    where: {
      // wallet Id
      id: 1,
    },
    data: {
      coinInWallet: {
        create: {
          amount: 150,
          coin: {
            connect: {
              id: 1,
            },
          },
        },
      },
    },
  });

  console.log(createdUsers, createdWallets, createdCoins, createdCoinsInWallet);
}

seed()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
