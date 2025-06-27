import { Users } from "../../entities/Users";
import { ICreateUserDTO } from "../../../useCases/createUser/ICreateUserDTO";
import { IUpdateUserDTO } from "../../../useCases/updateUser/IUpdateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  listAll(): Promise<Users[]>;
  listById(id: string): Promise<Users>;
  listByCpf(cpf: string): Promise<Users>;
  update(id: string, data: IUpdateUserDTO): Promise<Users>;
  delete(id: string): Promise<Users>;
}
