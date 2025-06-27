import prismaClient from "../../../prismaClient";

class GetProductsByUserIdService {
  async execute(userId: string) {
    const productsByUserId = await prismaClient.product.findMany({
      where: {
        userId,
      },
    });

    return productsByUserId;
  }
}

export { GetProductsByUserIdService };
