const walletRouter = require("express").Router();

const {
  createOneWallet,
  findAllWallets,
  updateWallet,
  deleteWallet,
} = require("./controller");

walletRouter.post("/", createOneWallet);

walletRouter.get("/", findAllWallets);

walletRouter.patch("/:id", updateWallet);

walletRouter.delete("/:id", deleteWallet);

module.exports = walletRouter;
