import prismaClient from "../../../prismaClient";

class GetUserByIdService {
  async execute(id: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
}

export { GetUserByIdService };
