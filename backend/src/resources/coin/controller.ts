const { coin } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneCoin(req, res) {
  const newCoin = req.body;
  dbClient.coin
    .create({ data: newCoin })
    .then((newCoin: string) => {
      res.json({ newCoin });
    })
    .catch((error: string) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllCoins(req, res) {
  dbClient.coin.findMany().then((allCoins: string[]) => res.json({ allCoins }));
}

function updateCoin(req, res) {
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

function deleteCoin(req, res) {
  const id = parseInt(req.params.id);
  dbClient.coin
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneCoin,
  findAllCoins,
  updateCoin,
  deleteCoin,
};
