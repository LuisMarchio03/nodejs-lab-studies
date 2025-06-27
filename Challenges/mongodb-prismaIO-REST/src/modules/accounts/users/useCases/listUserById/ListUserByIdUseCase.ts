import { Users } from "../../infra/entities/Users";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";

export class ListUserByIdUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<Users> {
    const user = await this.usersRepository.listById(id);
    return user;
  }
}
