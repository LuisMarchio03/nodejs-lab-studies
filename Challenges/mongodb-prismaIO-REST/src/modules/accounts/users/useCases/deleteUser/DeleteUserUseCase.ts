import { AppError } from "../../../../../errors/AppError";
import { Users } from "../../infra/entities/Users";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";

export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<Users> {
    const userExists = await this.usersRepository.listById(id);

    if (!userExists) {
      throw new AppError("User does not exists", 400);
    }

    const user = await this.usersRepository.delete(id);
    return user;
  }
}
