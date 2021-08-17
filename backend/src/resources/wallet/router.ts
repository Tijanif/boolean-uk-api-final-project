const walletRouter = require("express").Router();

const {
  createOneWallet,
  findAllWallets,
  updateWallet,
  deleteWallet,
  getOneWalletbyID
} = require("./controller");

walletRouter.post("/", createOneWallet);

walletRouter.get("/", findAllWallets);

walletRouter.get("/:id", getOneWalletbyID);

walletRouter.patch("/:id", updateWallet);

walletRouter.delete("/:id", deleteWallet);

module.exports = walletRouter;
