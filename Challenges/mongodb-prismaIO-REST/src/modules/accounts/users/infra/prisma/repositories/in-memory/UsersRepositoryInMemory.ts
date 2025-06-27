import { Users } from "../../../entities/Users";
import { ICreateUserDTO } from "../../../../useCases/createUser/ICreateUserDTO";
import { IUpdateUserDTO } from "../../../../useCases/updateUser/IUpdateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepositoryInMemory implements IUsersRepository {
  users: Users[] = [];

  async create(data: ICreateUserDTO): Promise<Users> {
    const user = new Users();

    Object.assign(user, {
      name: data.name,
      email: data.email,
      password: data.password,
      cpf: data.cpf,
    });

    this.users.push(user);

    return user;
  }
  async listAll(): Promise<Users[]> {
    return this.users;
  }
  async listById(id: string): Promise<Users> {
    return this.users.find((user) => user.id === id) as Users;
  }
  async listByCpf(cpf: string): Promise<Users> {
    return this.users.find((user) => user.cpf === cpf) as Users;
  }
  async update(id: string, data: IUpdateUserDTO): Promise<Users> {
    const user = this.users.find((user) => user.id === id) as Users;

    user.name = data.name;
    user.email = data.email;
    user.cpf = data.cpf;

    return user;
  }
  async delete(id: string): Promise<Users> {
    const user = this.users.find((user) => user.id === id) as Users;

    this.users.splice(this.users.indexOf(user), 1);

    return user;
  }
}
