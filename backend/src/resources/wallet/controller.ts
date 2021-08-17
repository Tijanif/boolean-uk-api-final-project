const { wallet } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneWallet(req, res) {
  const newWallet = req.body;
  dbClient.wallet
    .create({ data: newWallet })
    .then((newWallet: string) => {
      res.json({ newWallet });
    })
    .catch((error: string) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllWallets(req, res) {
  dbClient.wallet
    .findMany()
    .then((allWallets: string[]) => res.json({ allWallets }));
}

function updateWallet(req, res) {
  const updatedWallet = req.body;
  const id = parseInt(req.params.id);
  dbClient.wallet
    .update({
      where: { id: id },
      data: updatedWallet,
    })
    .then((updatedWallet: string) => {
      res.json({ updatedWallet });
    });
}

function deleteWallet(req, res) {
  const id = parseInt(req.params.id);
  dbClient.wallet
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneWallet,
  findAllWallets,
  updateWallet,
  deleteWallet,
};
