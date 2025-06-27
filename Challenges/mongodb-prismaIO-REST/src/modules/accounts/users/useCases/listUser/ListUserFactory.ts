import { UsersRepository } from "../../infra/prisma/repositories/implementations/UsersRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from "./ListUsersController";

export const listUserFactory = () => {
  const usersRepository = new UsersRepository();
  const listUsersUseCase = new ListUsersUseCase(usersRepository);
  const listUsersController = new ListUsersController(listUsersUseCase);
  return listUsersController;
};
