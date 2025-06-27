import { UsersRepository } from "../../infra/prisma/repositories/implementations/UsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export const updateUserFactory = () => {
  const usersRepository = new UsersRepository();
  const updateUserUseCase = new UpdateUserUseCase(usersRepository);
  const updateUserController = new UpdateUserController(updateUserUseCase);
  return updateUserController;
};
