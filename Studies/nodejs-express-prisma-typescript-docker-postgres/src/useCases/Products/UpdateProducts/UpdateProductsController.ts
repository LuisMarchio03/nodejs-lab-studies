import { Request, Response } from "express";
import { UpdateProductsService } from "./UpdateProductsService";

class UpdateProductsController {
  async handle(request: Request, response: Response) {
    const { name, price, quantity } = request.body;
    const { id } = request.params;

    const service = new UpdateProductsService();

    const products = await service.execute(name, price, quantity, id);

    return response.json(products);
  }
}

export { UpdateProductsController };
