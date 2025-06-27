import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import categoryRepository from "../repositories/category.repository";

const router = express.Router();

router.get(
  "/categories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const categories = await categoryRepository.findAllCategories();
      res.status(StatusCodes.OK).json({ categories });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/categories/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const category = await categoryRepository.findById(id);
      res.status(StatusCodes.OK).json({ category });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/categories",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newCategory = req.body;
      await categoryRepository.create(newCategory);
      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/categories/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const modifiedCategory = req.body;

      modifiedCategory.id = id;

      await categoryRepository.update(modifiedCategory);

      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/categories/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await categoryRepository.remove(id);

      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
