import { UsersRepositoryInMemory } from "../../infra/prisma/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

let usersRepositoryInMemory: IUsersRepository;
let updateUserUseCase: UpdateUserUseCase;

describe("Update user already exists", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    updateUserUseCase = new UpdateUserUseCase(usersRepositoryInMemory);
  });

  it("[users] should not be able to update user does not exists", async () => {
    expect(async () => {
      const user = {
        name: "User Test",
        email: "test@example.com",
        cpf: "06674117129",
      };
      const id = "123456";

      await updateUserUseCase.execute(id, user);
    }).rejects.toBeInstanceOf(Error);
  });

  it("[users] should be able to updated a user already exists", async () => {
    const createUser = await usersRepositoryInMemory.create({
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: "123456",
      isAdmin: true,
    });

    const user = {
      name: "User Test",
      email: "test@example.com",
      cpf: "06674117129",
      password: createUser.password,
    };

    const update = await updateUserUseCase.execute(createUser.id, user);

    expect(update).toEqual(user);
  });
});
