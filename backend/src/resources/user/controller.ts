export {}
const { user } = require("../../../utilities/database")
const dbClient = require("../../../utilities/database")

function createOneUser(req: { body: any; }, res: { json: (arg0: { newUser?: string; msg?: string; }) => void; }) {
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

const findUserById = (req: { params: { id: any; }; }, res: any) => {
  const id = Number(req.params.id)

  dbClient.user.findUnique({
    where: {id: id },
   include: {
     wallet: true,
   }}).then((foundUser: any) => res.json(foundUser))
}

function findAllUsers(req: any, res: { json: (arg0: { allUsers: string[]; }) => any; }) {
  dbClient.user.findMany().then((allUsers: string[]) => res.json({ allUsers }));
}

function updateUser(req: { body: any; params: { id: string; }; }, res: { json: (arg0: { updatedUser: string; }) => void; }) {
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

function deleteUser(req: { params: { id: string; }; }, res: { json: (arg0: { msg: string; }) => any; }) {
  const id = parseInt(req.params.id);
 
  dbClient.user
    .delete({
      where: { id: id },
    })
    .then((user: any) => res.json({ msg: `you deleted meeeee @ id no ${id}` }));
}

module.exports = {
  createOneUser,
  findAllUsers,
  updateUser,
  deleteUser,
  findUserById
};



