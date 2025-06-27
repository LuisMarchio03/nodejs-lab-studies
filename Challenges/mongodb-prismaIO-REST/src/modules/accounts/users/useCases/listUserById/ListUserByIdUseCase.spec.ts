import { UsersRepositoryInMemory } from "../../infra/prisma/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { ListUserByIdUseCase } from "./ListUserByIdUseCase";

let usersRepositoryInMemory: IUsersRepository;
let listUserByIdUseCase: ListUserByIdUseCase;

describe("List User By Id", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    listUserByIdUseCase = new ListUserByIdUseCase(usersRepositoryInMemory);
  });

  it("[users] should be able to a list user by id", async () => {
    const create = await usersRepositoryInMemory.create({
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: "123456",
      isAdmin: true,
    });

    const user = await listUserByIdUseCase.execute(create.id);

    expect(user).toEqual(create);
  });
});
