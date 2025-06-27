import { AppError } from "../../../../../errors/AppError";
import { Users } from "../../infra/entities/Users";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { IUpdateUserDTO } from "./IUpdateUserDTO";

export class UpdateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string, data: IUpdateUserDTO): Promise<Users> {
    const userExists = await this.usersRepository.listById(id);

    if (!userExists) {
      throw new AppError("User does not exists", 400);
    }

    const updateUser = await this.usersRepository.update(id, data);
    return updateUser;
  }
}
