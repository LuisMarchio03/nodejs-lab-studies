import { Request, Response } from "express";
import { ProductsRepository } from "../repositories/products.repository";
import { productsSchema } from "../validations/products.validation";

class ProductsController {
  async create(request: Request, response: Response) {
    try {
      await productsSchema.validate(request.body);

      const productsRepository = new ProductsRepository();
      const results = await productsRepository.create(request.body);

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const productsRepository = new ProductsRepository();
      const results = await productsRepository.findAll();

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const productsRepository = new ProductsRepository();
      const results = await productsRepository.findById(id);

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { name, price, quantity } = request.body;

      const productsRepository = new ProductsRepository();

      await productsRepository.update(id, name, price, quantity);

      return response.json({
        error: false,
        message: "Product updated successfully",
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const productsRepository = new ProductsRepository();
      await productsRepository.delete(id);

      return response.json({
        error: "false",
        message: "Product successfully deleted",
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export { ProductsController };
