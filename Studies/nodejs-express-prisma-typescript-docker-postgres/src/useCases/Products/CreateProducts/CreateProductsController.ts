import { Request, Response } from "express";
import { CreateProductsService } from "./CreateProductsService";

class CreateProductsController {
  async handle(request: Request, response: Response) {
    const { name, price, quantity, userId } = request.body;

    const service = new CreateProductsService();
    const results = await service.execute(name, price, quantity, userId);

    return response.json(results);
  }
}

export { CreateProductsController };
