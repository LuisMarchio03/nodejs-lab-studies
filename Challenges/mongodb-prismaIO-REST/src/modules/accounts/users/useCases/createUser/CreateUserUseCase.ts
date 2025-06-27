import { hash } from "bcryptjs";
import { AppError } from "../../../../../errors/AppError";
import { Users } from "../../infra/entities/Users";
import { IUsersRepository } from "../../infra/prisma/repositories/IUsersRepository";
import { userSchemaValidation } from "./CreateUserValidation";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserDTO): Promise<Users> {
    const userAlreadyExists = await this.usersRepository.listByCpf(data.cpf);
    if (userAlreadyExists) {
      throw new AppError("User Already Exists!", 400);
    }

    await userSchemaValidation.validate(data);

    const passwordHash = await hash(data.password, 8);

    const user = await this.usersRepository.create({
      name: data.name,
      cpf: data.cpf,
      email: data.email,
      password: passwordHash,
      isAdmin: data.isAdmin,
      isClient: data.isClient,
      isSeller: data.isSeller,
    });

    return user;
  }
}
