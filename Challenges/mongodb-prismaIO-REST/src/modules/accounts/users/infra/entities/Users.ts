import { User as UserPrisma } from "@prisma/client";
import { v4 } from "uuid";

export class Users implements UserPrisma {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
  isAdmin: boolean | null;
  isClient: boolean | null;
  isSeller: boolean | null;
}
