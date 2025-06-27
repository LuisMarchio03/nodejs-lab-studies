import { Request, Response } from "express";
import { ReadProductService } from "../services/ReadProductsService";

class ReadProductsController {
  async read(request: Request, response: Response) {
    const readProductsService = new ReadProductService();

    const product = await readProductsService.execute();

    return response.json(product);
  }
}

export { ReadProductsController };
