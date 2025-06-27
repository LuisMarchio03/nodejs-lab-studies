import { Request, Response } from "express";
import { ListUserByIdUseCase } from "./ListUserByIdUseCase";

export class ListUserByIdController {
  constructor(private listUserByIdUseCase: ListUserByIdUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const user = await this.listUserByIdUseCase.execute(id);
      return response.status(200).json(user);
    } catch (err) {
      return response.status(400).json({ error: err });
    }
  }
}
