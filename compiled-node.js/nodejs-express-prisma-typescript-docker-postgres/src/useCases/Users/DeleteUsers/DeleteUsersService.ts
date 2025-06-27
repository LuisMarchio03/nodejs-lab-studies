import prismaClient from "../../../prismaClient";

class DeleteUsersService {
  async execute(id: string) {
    const usersDelete = await prismaClient.user.delete({
      where: {
        id,
      },
    });

    const deleteProductsByUserId = await prismaClient.product.deleteMany({
      where: {
        userId: id,
      },
    });

    return { usersDelete, deleteProductsByUserId };
  }
}

export { DeleteUsersService };
