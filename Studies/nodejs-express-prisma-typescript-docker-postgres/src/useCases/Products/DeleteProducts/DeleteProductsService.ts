import prismaClient from "../../../prismaClient";

class DeleteProductsService {
  async execute(id: string) {
    const productDelete = await prismaClient.product.delete({
      where: {
        id,
      },
    });

    return productDelete;
  }
}

export { DeleteProductsService };
