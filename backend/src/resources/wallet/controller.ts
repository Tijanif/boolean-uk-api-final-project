export {}
const { wallet } = require("../../../utilities/database");
const dbClient = require("../../../utilities/database");

function createOneWallet(req: { body: any; }, res: { json: (arg0: { newWallet?: string; msg?: string; }) => void; }) {
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

function findAllWallets(req: any, res: { json: (arg0: { allWallets: string[]; }) => any; }) {
  dbClient.wallet
    .findMany()
    .then((allWallets: string[]) => res.json({ allWallets }));
}

function updateWallet(req: { body: any; params: { id: string; }; }, res: { json: (arg0: { updatedWallet: string; }) => void; }) {
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

function deleteWallet(req: { params: { id: string; }; }, res: { json: (arg0: { msg: string; }) => any; }) {
  const id = parseInt(req.params.id);
  dbClient.wallet
    .delete({
      where: { id: id },
    })
    .then((user: {}) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneWallet,
  findAllWallets,
  updateWallet,
  deleteWallet,
};
