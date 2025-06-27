import { Request, Response } from "express";
import { usersSchema } from "../validations/users.validation";
import { UsersRepository } from "../repositories/users.repository";

class UsersController {
  async create(request: Request, response: Response) {
    try {
      await usersSchema.validate(request.body);

      const usersRepository = new UsersRepository();
      const results = await usersRepository.create(request.body);

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async findAll(request: Request, response: Response) {
    try {
      const usersRepository = new UsersRepository();
      const results = await usersRepository.findAll();

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async findById(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const usersRepository = new UsersRepository();
      const results = await usersRepository.findById(id);

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async findByUsername(request: Request, response: Response) {
    try {
      const { username } = request.params;

      const usersRepository = new UsersRepository();
      const results = await usersRepository.findByUsername(username);

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const { name, username, password } = request.body;
      const { id } = request.params;

      const usersRepository = new UsersRepository();
      const results = await usersRepository.update(
        name,
        username,
        password,
        id
      );

      return response.json(results);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const usersRepository = new UsersRepository();
      await usersRepository.delete(id);

      return response.json({
        error: false,
        success: "User successfully deleted",
      });
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export { UsersController };
