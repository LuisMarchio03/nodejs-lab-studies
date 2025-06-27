import { Request, Response } from "express";
import { GetProductsService } from "./GetProductsService";

class GetProductsController {
  async handle(request: Request, response: Response) {
    const service = new GetProductsService();

    const products = await service.execute();

    return response.json(products);
  }
}

export { GetProductsController };
