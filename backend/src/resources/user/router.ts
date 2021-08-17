const userRouter = require("express").Router();

const {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
} = require("./controller");

userRouter.post("/", createOneUser);

userRouter.get("/", findAllUsers);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
