import { Request, Response } from "express";
import { CreateUsersService } from "./CreateUsersService";

class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { username, password, admin } = request.body;

    const service = new CreateUsersService();
    const results = await service.execute(username, password, admin);

    return response.json(results);
  }
}

export { CreateUsersController };
