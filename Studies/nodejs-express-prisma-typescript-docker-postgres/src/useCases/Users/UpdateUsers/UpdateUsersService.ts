import prismaClient from "../../../prismaClient";

class UpdateUsersService {
  async execute(
    username: string,
    password: string,
    admin: boolean,
    id: string
  ) {
    const users = await prismaClient.user.update({
      data: {
        username,
        password,
        admin,
      },
      where: {
        id,
      },
    });

    return users;
  }
}

export { UpdateUsersService };
