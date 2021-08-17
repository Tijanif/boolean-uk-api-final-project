export {}
const { coinInWallet } = require("../../../utilities/database")
const dbClient = require("../../../utilities/database")

// coinInWalletRouter.post("/", createOneCoinInWallet);

// coinInWalletRouter.get("/", findAllCoinInWallet);

// coinInWalletRouter.get("/:id", findCoinInWalletById);

// coinInWalletRouter.patch("/:id", updateCoinInWallet);

// coinInWalletRouter.delete("/:id", deleteCoinInWallet);


function createOneCoinInWallet(req: { body: any; }, res: { json: (arg0: { newCoinWallet?: string; msg?: string; }) => void; }) {
  const newCoinWallet = req.body;
  dbClient.coinInWallet
    .create({ data: {newCoinWallet} })
    .then((newCoinWallet: string) => {
      res.json({ newCoinWallet });
    })
    .catch((error: string) => {
      res.json({ msg: "...you fucked up didn't ya son from creatOneCoinWallet" });
    });
}

// wallet id
// coin id
// amount

// const findUserById = (req: { params: { id: any; }; }, res: any) => {
//   const id = Number(req.params.id)

//   dbClient.user.findUnique({
//     where: {id: id },
//    include: {
//      wallet: true,
//    }}).then((foundUser: any) => res.json(foundUser))
// }

// function findAllUsers(req: any, res: { json: (arg0: { allUsers: string[]; }) => any; }) {
//   dbClient.user.findMany().then((allUsers: string[]) => res.json({ allUsers }));
// }

// function updateUser(req: { body: any; params: { id: string; }; }, res: { json: (arg0: { updatedUser: string; }) => void; }) {
//   const updatedUser = req.body;
//   const id = parseInt(req.params.id);
//   dbClient.user
//     .update({
//       where: { id: id },
//       data: updatedUser,
//     })
//     .then((updatedUser: string) => {
//       res.json({ updatedUser });
//     });
// }

// function deleteUser(req: { params: { id: string; }; }, res: { json: (arg0: { msg: string; }) => any; }) {
//   const id = parseInt(req.params.id);
//   dbClient.user
//     .delete({
//       where: { id: id },
//     })
//     .then((user: any) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
// }

module.exports = {
    createOneCoinInWallet,
    // findAllCoinInWallet,
    // findCoinInWalletById,
    // updateCoinInWallet,
    // deleteCoinInWallet
};



