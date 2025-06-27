import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const results = await this.createUserUseCase.execute(request.body);
      return response.status(201).json(results);
    } catch (err) {
      return response.status(400).json(err);
    }
  }
}
