import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const user = await this.deleteUserUseCase.execute(id);

      return user;
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
