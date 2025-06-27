import prismaClient from "../../../prismaClient";

class CreateUsersService {
  async execute(username: string, password: string, admin: boolean) {
    const users = prismaClient.user.create({
      data: {
        username,
        password,
        admin,
      },
    });

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new Error("Esse usuário já esta cadastrado");
    }

    return users;
  }
}

export { CreateUsersService };
