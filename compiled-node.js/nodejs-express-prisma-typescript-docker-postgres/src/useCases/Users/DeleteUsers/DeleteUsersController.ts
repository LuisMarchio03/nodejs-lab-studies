import { Request, Response } from "express";
import { DeleteUsersService } from "./DeleteUsersService";

class DeleteUsersController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteUsersService();

    await service.execute(id);

    return response.json({
      error: false,
      success: "Usuario deletado com sucesso",
    });
  }
}

export { DeleteUsersController };
