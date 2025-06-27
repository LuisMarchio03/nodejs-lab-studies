import { Request, Response } from "express";
import { CreateProductService } from "../services/CreateProductsService";

class CreateProductsController {
  async create(request: Request, response: Response) {
    const { name, price, description } = request.body;

    const createProductsService = new CreateProductService();

    const product = await createProductsService.execute({
      name,
      price,
      description,
    });

    return response.json(product);
  }
}

export { CreateProductsController };
