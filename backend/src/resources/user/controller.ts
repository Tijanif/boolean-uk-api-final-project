const { user } = require("../../utils/dbClient");
const dbClient = require("../../utils/dbClient");

function createOneUser(req, res) {
  const newUser = req.body;
  dbClient.user
    .create({ data: newUser })
    .then((newUser: string) => {
      res.json({ newUser });
    })
    .catch((error: string) => {
      res.json({ msg: "...you fucked up didn't ya son" });
    });
}

function findAllUsers(req, res) {
  dbClient.user.findMany().then((allUsers: string[]) => res.json({ allUsers }));
}

function updateUser(req, res) {
  const updatedUser = req.body;
  const id = parseInt(req.params.id);
  dbClient.user
    .update({
      where: { id: id },
      data: updatedUser,
    })
    .then((updatedUser: string) => {
      res.json({ updatedUser });
    });
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id);
  dbClient.user
    .delete({
      where: { id: id },
    })
    .then((user) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
};
