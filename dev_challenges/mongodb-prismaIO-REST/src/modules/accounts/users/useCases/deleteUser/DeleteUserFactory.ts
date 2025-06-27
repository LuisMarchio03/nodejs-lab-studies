import { UsersRepository } from "../../infra/prisma/repositories/implementations/UsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export const deleteUserFactory = () => {
  const usersRepository = new UsersRepository();
  const deleteUserUseCase = new DeleteUserUseCase(usersRepository);
  const deleteUserController = new DeleteUserController(deleteUserUseCase);
  return deleteUserController;
};
