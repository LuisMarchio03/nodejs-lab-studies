import prismaClient from "../../../prismaClient";

class GetProductByIdService {
  async execute(id: string) {
    const user = prismaClient.user.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
}

export { GetProductByIdService };
