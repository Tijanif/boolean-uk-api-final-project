const userRouter = require("express").Router();

const {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
  findUserById
} = require("./controller");

userRouter.post("/", createOneUser);

userRouter.get("/", findAllUsers);

userRouter.get("/:id", findUserById);

userRouter.patch("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

module.exports = userRouter;
