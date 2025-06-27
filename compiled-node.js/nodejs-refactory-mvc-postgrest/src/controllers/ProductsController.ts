import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import productsRepository from "../repositories/products.repository";

class ProductsController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const products = req.body;
      await productsRepository.create(products);
      res.status(StatusCodes.OK).json({ error: false, products });
    } catch (error) {
      next(error);
    }
  }

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await productsRepository.findAll();
      res.status(StatusCodes.OK).json({ products });
    } catch (error) {
      next(error);
    }
  }

  async readById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const product = await productsRepository.findById(id);
      res.status(StatusCodes.OK).json({ product });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const modifiedProducts = req.body;

      modifiedProducts.id = id;

      await productsRepository.update(modifiedProducts);

      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }

  async remove(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      await productsRepository.remove(id);

      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
}

export { ProductsController };
