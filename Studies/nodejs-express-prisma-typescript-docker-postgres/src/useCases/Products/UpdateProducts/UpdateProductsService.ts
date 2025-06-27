import prismaClient from "../../../prismaClient";

class UpdateProductsService {
  async execute(name: string, price: string, quantity: number, id: string) {
    const products = await prismaClient.product.update({
      data: {
        name,
        price,
        quantity,
      },
      where: {
        id: id,
      },
    });

    return products;
  }
}

export { UpdateProductsService };
