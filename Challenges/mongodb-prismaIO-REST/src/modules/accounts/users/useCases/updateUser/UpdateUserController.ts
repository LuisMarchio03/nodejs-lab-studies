import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const results = this.updateUserUseCase.execute(id, request.body);
      return response.status(200).json(results);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
