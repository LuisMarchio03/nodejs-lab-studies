import { Users } from "../../infra/entities/Users";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";

export class ListUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<Users[]> {
    const users = await this.usersRepository.listAll();
    return users;
  }
}
