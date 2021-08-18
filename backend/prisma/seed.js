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

  // let theRandomNumber = Math.floor(Math.random() * 3) + 1;

  const randomNumber = (num1, num2) => {
    return Math.floor(Math.random() * num1) + num2;
  };

  for (let i = 0; i < 10; i++) {
    const createdCoinsInWallet = await dbClient.wallet.update({
      where: {
        // wallet Id
        id: randomNumber(4, 1),
      },
      data: {
        coinInWallet: {
          create: {
            amount: randomNumber(150, 1),
            coin: {
              connect: {
                id: randomNumber(6, 1),
              },
            },
          },
        },
      },
    });
    console.log(createdCoinsInWallet);
  }

  console.log(createdUsers, createdWallets, createdCoins);
}

seed()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await dbClient.$disconnect();
  });
