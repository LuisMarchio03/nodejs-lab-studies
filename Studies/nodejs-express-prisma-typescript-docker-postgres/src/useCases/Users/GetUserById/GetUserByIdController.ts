import { Request, Response } from "express";
import { GetUserByIdService } from "./GetUserByIdService";

class GetUserByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetUserByIdService();

    const result = await service.execute(id);

    return response.json(result);
  }
}

export { GetUserByIdController };
