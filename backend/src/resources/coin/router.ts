const coinRouter = require("express").Router();

const {
  createOneCoin,
  findAllCoins,
  updateCoin,
  deleteCoin,
} = require("./controller");

coinRouter.post("/", createOneCoin);

coinRouter.get("/", findAllCoins);

coinRouter.patch("/:id", updateCoin);

coinRouter.delete("/:id", deleteCoin);

module.exports = coinRouter;
