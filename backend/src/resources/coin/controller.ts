export {};

const dbClient = require('../../../utilities/database');

function createOneCoin(
  req: { body: any },
  res: { json: (arg0: { newCoin?: string; msg?: string }) => void }
) {
  const { name, value } = req.body;

  if (typeof value === 'number') {
    dbClient.coin
      .create({ data: { name, value } })
      .then((newCoin: string) => {
        res.json({ newCoin });
      })
      .catch((error: string) => {
        res.json({ msg: '...you fucked value is not a number' });
      });
  }
}

function findAllCoins(
  req: any,
  res: { json: (arg0: { allCoins: string[] }) => any }
) {
  dbClient.coin.findMany().then((allCoins: string[]) => res.json({ allCoins }));
}

function updateCoin(
  req: { body: any; params: { id: string } },
  res: { json: (arg0: { updatedCoin: string }) => void }
) {
  const updatedCoin = req.body;
  const id = parseInt(req.params.id);
  dbClient.coin
    .update({
      where: { id: id },
      data: updatedCoin,
    })
    .then((updatedCoin: string) => {
      res.json({ updatedCoin });
    });
}

function deleteCoin(
  req: { params: { id: string } },
  res: { json: (arg0: { msg: string }) => any }
) {
  const id = parseInt(req.params.id);
  dbClient.coin
    .delete({
      where: { id: id },
    })
    .then((user: any) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneCoin,
  findAllCoins,
  updateCoin,
  deleteCoin,
};
