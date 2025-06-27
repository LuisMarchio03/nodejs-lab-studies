import { Request, Response } from "express";
import { GetProductsByUserIdService } from "./GetProductsByUserIdService";

class GetProductsByUserIdController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;

    const service = new GetProductsByUserIdService();

    const productsByUserId = await service.execute(userId);

    return response.json(productsByUserId);
  }
}

export { GetProductsByUserIdController };
