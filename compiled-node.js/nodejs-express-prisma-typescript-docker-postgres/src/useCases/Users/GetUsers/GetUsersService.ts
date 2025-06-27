import prismaClient from "../../../prismaClient";

class GetUsersService {
  async execute() {
    const users = await prismaClient.user.findMany();

    return users;
  }
}

export { GetUsersService };
