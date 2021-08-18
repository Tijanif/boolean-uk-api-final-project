export {};
import { User } from '@prisma/client';
const dbClient = require('../../../utilities/database');

function createOneUser(
  req: { body: any },
  res: {
    json: (arg0: { newUser?: User; msg?: string }) => void;
  }
) {
  const newUser = req.body;
  console.log(req.body);
  const { userName } = req.body;
  if (userName === null) throw new Error('Username undefined');
  console.log(userName);

  dbClient.user
    .findUnique({
      where: {
        userName: userName,
      },
    })
    .then((user: User) => {
      if (!user) {
        dbClient.user
          .create({
            data: { ...newUser, wallet: { create: {} } },
            include: { wallet: true },
          })
          .then((newUser: User) => {
            res.json({ newUser });
          })
          .catch((error: string) => {
            res.json({ msg: error });
          });
      } else {
        res.json({ msg: 'User already exist' });
      }
    });
}

// if {typeof username !== string} return res.status(404).send('invalid username')

const findUserById = (req: { params: { id: any } }, res: any) => {
  const id = Number(req.params.id);

  dbClient.user
    .findUnique({
      where: { id: id },
      include: {
        wallet: true,
      },
    })
    .then((foundUser: any) => res.json(foundUser));
};

function findAllUsers(
  req: any,
  res: { json: (arg0: { allUsers: string[] }) => any }
) {
  dbClient.user.findMany().then((allUsers: string[]) => res.json({ allUsers }));
}

function updateUser(
  req: { body: any; params: { id: string } },
  res: { json: (arg0: { updatedUser: string }) => void }
) {
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

function deleteUser(
  req: { params: { id: string } },
  res: { json: (arg0: { msg: string }) => any }
) {
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
  findUserById,
};
