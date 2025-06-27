import { Request, Response } from "express";
import { AuthenticateRepository } from "../repositories/authenticate.repository";

class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body;

    const authenticateRepository = new AuthenticateRepository();

    const token = await authenticateRepository.execute({
      username,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateController };
