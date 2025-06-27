import { Request, Response } from "express";
import { UpdateUsersService } from "./UpdateUsersService";

class UpdateUsersController {
  async handle(request: Request, response: Response) {
    const { username, password, admin } = request.body;
    const { id } = request.params;

    const service = new UpdateUsersService();

    const users = await service.execute(username, password, admin, id);

    return response.json(users);
  }
}

export { UpdateUsersController };
