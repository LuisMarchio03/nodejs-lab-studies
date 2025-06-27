import prismaClient from "../../../prismaClient";

class CreateProductsService {
  async execute(name: string, price: string, quantity: number, userId: string) {
    const products = prismaClient.product.create({
      data: {
        userId,
        name,
        price,
        quantity,
      },
    });

    const productsAlreadyExists = await prismaClient.product.findFirst({
      where: {
        name,
      },
    });

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (productsAlreadyExists) {
      throw new Error("Produto já cadastrado");
    }

    if (!userAlreadyExists) {
      throw new Error("O usuário não consta no DB");
    }

    return products;
  }
}

export { CreateProductsService };
