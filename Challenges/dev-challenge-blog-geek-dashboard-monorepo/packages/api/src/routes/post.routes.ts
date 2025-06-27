import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import postsRepository from "../repositories/posts.repository";

const router = express.Router();

router.get(
  "/posts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await postsRepository.findAllPosts();
      res.status(StatusCodes.OK).json({ posts });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/posts/category/:category_id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const category_id = req.params.category_id;
      const posts = await postsRepository.findByCategory(category_id);
      res.status(StatusCodes.OK).json({ posts });
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/posts/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const posts = await postsRepository.findById(id);
      res.status(StatusCodes.OK).json({ posts });
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/posts",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = req.body;
      await postsRepository.create(posts);
      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/posts/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const modifiedPost = req.body;

      modifiedPost.id = id;

      await postsRepository.update(modifiedPost);

      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/posts/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      await postsRepository.remove(id);

      res.status(StatusCodes.OK).json({ error: false });
    } catch (error) {
      next(error);
    }
  }
);

export default router;
