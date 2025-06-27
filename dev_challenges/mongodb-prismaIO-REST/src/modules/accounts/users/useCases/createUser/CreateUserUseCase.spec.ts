import { UsersRepositoryInMemory } from "../../infra/prisma/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

let usersRepositoryInMemory: IUsersRepository;
let createUserUseCase: CreateUserUseCase;

describe("Create users", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("[users] should not be able to create a new user already exists", async () => {
    expect(async () => {
      await createUserUseCase.execute({
        name: "User Example",
        cpf: "xxxxxxxxxxx",
        email: "user_example@email.com",
        password: "123456",
        isAdmin: true,
      });

      await createUserUseCase.execute({
        name: "User Example",
        cpf: "xxxxxxxxxxx",
        email: "user_example@email.com",
        password: "123456",
        isAdmin: true,
      });
    }).rejects.toBeInstanceOf(Error);
  });

  it("[users] should be able to create a new user", async () => {
    const response = await createUserUseCase.execute({
      name: "User Example",
      cpf: "xxxxxxxxxxx",
      email: "user_example@email.com",
      password: "123456",
      isAdmin: true,
    });

    expect(response).toEqual({
      cpf: "xxxxxxxxxxx",
      email: "user_example@email.com",
      name: "User Example",
      password: response.password,
    });
  });
});
