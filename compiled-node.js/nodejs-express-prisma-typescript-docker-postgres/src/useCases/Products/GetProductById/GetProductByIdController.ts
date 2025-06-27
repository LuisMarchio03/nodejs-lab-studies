import { Request, Response } from "express";
import { GetProductByIdService } from "./GetProductByIdService";

class GetProductByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetProductByIdService();

    const result = await service.execute(id);

    return response.json(result);
  }
}

export { GetProductByIdController };
