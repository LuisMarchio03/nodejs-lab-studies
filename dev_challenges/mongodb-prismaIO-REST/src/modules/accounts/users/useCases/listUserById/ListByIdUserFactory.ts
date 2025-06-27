import { UsersRepository } from "../../infra/prisma/repositories/implementations/UsersRepository";
import { ListUserByIdController } from "./ListUserByIdController";
import { ListUserByIdUseCase } from "./ListUserByIdUseCase";

export const listUserByIdFactory = () => {
  const usersRepository = new UsersRepository();
  const listUserByIdUseCase = new ListUserByIdUseCase(usersRepository);
  const listUserByIdController = new ListUserByIdController(
    listUserByIdUseCase
  );
  return listUserByIdController;
};
