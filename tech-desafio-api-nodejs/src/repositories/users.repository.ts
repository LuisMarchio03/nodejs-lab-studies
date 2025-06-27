import prismaClient from "../prismaClient";
import { hash } from "bcryptjs";

interface DataProps {
  name: string;
  username: string;
  password: string;
}

class UsersRepository {
  async create(data: DataProps) {
    const passwordHash = await hash(data.password, 8);

    const users = prismaClient.user.create({
      data: {
        name: data.name,
        username: data.username,
        password: passwordHash,
      },
    });

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        OR: [
          {
            username: data.username,
          },
          {
            name: data.name,
          },
        ],
      },
    });

    if (userAlreadyExists) {
      throw new Error("This user is already registered");
    }

    return users;
  }

  async findAll() {
    const users = await prismaClient.user.findMany();
    return users;
  }

  async findById(id: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }

  async findByUsername(username: string) {
    const user = prismaClient.user.findFirst({
      where: {
        username,
      },
    });

    return user;
  }

  async update(name: string, username: string, password: string, id: string) {
    const users = await prismaClient.user.update({
      data: {
        name,
        username,
        password,
      },
      where: {
        id,
      },
    });

    return users;
  }

  async delete(id: string) {
    const usersDelete = await prismaClient.user.delete({
      where: {
        id,
      },
    });

    return { usersDelete };
  }
}

export { UsersRepository };
