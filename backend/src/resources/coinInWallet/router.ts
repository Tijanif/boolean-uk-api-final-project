const coinInWalletRouter = require("express").Router();

const {
  createOneCoinInWallet,
  // findAllCoinInWallet,
  // updateCoinInWallet,
  // deleteCoinInWallet,
  // findCoinInWalletById
} = require("./controller");

coinInWalletRouter.post("/", createOneCoinInWallet);

// coinInWalletRouter.get("/", findAllCoinInWallet);

// coinInWalletRouter.get("/:id", findCoinInWalletById);

// coinInWalletRouter.patch("/:id", updateCoinInWallet);

// coinInWalletRouter.delete("/:id", deleteCoinInWallet);

module.exports = coinInWalletRouter;
