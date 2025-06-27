import { prismaClient } from "../../../../../shared/infra/prisma";
import { UsersRepositoryInMemory } from "../../infra/prisma/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

let usersRepositoryInMemory: IUsersRepository;
let deleteUserUseCase: DeleteUserUseCase;

describe("Delete user by id", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    deleteUserUseCase = new DeleteUserUseCase(usersRepositoryInMemory);
  });

  it("[users] should not be able to delete user does not exists", async () => {
    expect(async () => {
      const id = "123456";
      await deleteUserUseCase.execute(id);
    }).rejects.toBeInstanceOf(Error);
  });

  it("should be able to delete user by id", async () => {
    const create = await usersRepositoryInMemory.create({
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: "123456",
      isAdmin: true,
    });

    const user = await deleteUserUseCase.execute(create.id);

    expect(user).toEqual(create);
  });
});
