import { UsersRepositoryInMemory } from "../../infra/prisma/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";

let userRepositoryInMemory: IUsersRepository;
let listUserUseCase: ListUsersUseCase;

describe("List All Users", () => {
  beforeEach(() => {
    userRepositoryInMemory = new UsersRepositoryInMemory();
    listUserUseCase = new ListUsersUseCase(userRepositoryInMemory);
  });

  it("[users] should be able to list all users admin", async () => {
    const user = await userRepositoryInMemory.create({
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: "123456",
      isAdmin: true,
    });

    const users = await listUserUseCase.execute();

    expect(users).toEqual([user]);
  });

  it("[users] should be able to list all users client", async () => {
    const user = await userRepositoryInMemory.create({
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: "123456",
      isClient: true,
    });

    const users = await listUserUseCase.execute();

    expect(users).toEqual([user]);
  });

  it("[users] should be able to list all users sellers", async () => {
    const user = await userRepositoryInMemory.create({
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: "123456",
      isSeller: true,
    });

    const users = await listUserUseCase.execute();

    expect(users).toEqual([user]);
  });
});
