import { Request, Response } from "express";
import { DeleteProductsService } from "./DeleteProductsService";

class DeleteProductsController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteProductsService();

    await service.execute(id);

    return response.json({
      error: false,
      success: "Produto deletado com sucesso",
    });
  }
}

export { DeleteProductsController };
