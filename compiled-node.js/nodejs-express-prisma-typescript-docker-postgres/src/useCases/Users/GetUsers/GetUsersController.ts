import { Request, Response } from "express";
import { GetUsersService } from "./GetUsersService";

class GetUsersController {
  async handle(request: Request, response: Response) {
    const service = new GetUsersService();

    const users = await service.execute();

    return response.json(users);
  }
}

export { GetUsersController };
