import { Router } from "express";
import { UsersController } from "../controllers/users.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/", ensureAuthenticated, usersController.findAll);
usersRoutes.get("/:id", ensureAuthenticated, usersController.findById);
usersRoutes.put("/:id", ensureAuthenticated, usersController.update);
usersRoutes.delete("/:id", ensureAuthenticated, usersController.delete);

export { usersRoutes };
