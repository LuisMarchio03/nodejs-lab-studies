import prismaClient from "../prismaClient";
import { compare } from "bcryptjs";
import { UsersRepository } from "./users.repository";
import { sign } from "jsonwebtoken";

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
  };
  token: string;
}

class AuthenticateRepository {
  async execute({ username, password }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();
    const user = await usersRepository.findByUsername(username);

    if (!user) {
      throw new Error("Username/Password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Username/Password incorrect");
    }

    const token = sign({}, `${process.env.TOKEN_HASH}`, {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        username: user.username,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateRepository };
