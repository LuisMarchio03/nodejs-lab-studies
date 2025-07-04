export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin?: boolean;
  isClient?: boolean;
  isSeller?: boolean;
}
