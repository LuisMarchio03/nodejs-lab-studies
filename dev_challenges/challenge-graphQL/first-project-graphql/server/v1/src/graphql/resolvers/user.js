const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  return users;
}

async function getUser(_, { email }) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return user;
}

async function createUser(_, { data }) {
  const user = await prisma.user.create({
    data,
  });
  return user;
}

async function updateUser(_, { id, data }) {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data,
  });
  return user;
}

async function deleteUser(_, { id }) {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return user;
}

module.exports = {
  Query: {
    users: getUsers,
    user: getUser,
  },

  Mutation: {
    createUser,
    updateUser,
    deleteUser,
  },
};
