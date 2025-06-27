import { prismaClient } from "../../../../../../../shared/infra/prisma";
import { Users } from "../../../entities/Users";
import { ICreateUserDTO } from "../../../../useCases/createUser/ICreateUserDTO";
import { IUpdateUserDTO } from "../../../../useCases/updateUser/IUpdateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<Users> {
    const results = await prismaClient.user.create({
      data: {
        name: data.name,
        cpf: data.cpf,
        email: data.email,
        password: data.password,
        isAdmin: data.isAdmin,
        isClient: data.isClient,
        isSeller: data.isSeller,
      },
    });
    return results;
  }
  async listAll(): Promise<Users[]> {
    const results = await prismaClient.user.findMany();
    return results;
  }
  async listById(id: string): Promise<Users> {
    const results = (await prismaClient.user.findUnique({
      where: {
        id: id,
      },
    })) as Users;

    return results;
  }
  async listByCpf(cpf: string): Promise<Users> {
    const results = (await prismaClient.user.findUnique({
      where: {
        cpf: cpf,
      },
    })) as Users;

    return results;
  }
  async update(id: string, data: IUpdateUserDTO): Promise<Users> {
    const results = await prismaClient.user.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        email: data.email,
        cpf: data.cpf,
      },
    });
    return results;
  }
  async delete(id: string): Promise<Users> {
    const results = await prismaClient.user.delete({
      where: {
        id,
      },
    });
    return results;
  }
}
