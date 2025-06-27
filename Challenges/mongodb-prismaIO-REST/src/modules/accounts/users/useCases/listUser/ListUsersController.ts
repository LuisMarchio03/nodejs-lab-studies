import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const user = await this.listUsersUseCase.execute();
      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
