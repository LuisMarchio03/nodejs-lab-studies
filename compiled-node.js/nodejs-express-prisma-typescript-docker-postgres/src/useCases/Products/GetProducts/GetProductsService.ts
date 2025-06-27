import prismaClient from "../../../prismaClient";

class GetProductsService {
  async execute() {
    const products = await prismaClient.product.findMany();

    return products;
  }
}

export { GetProductsService };
