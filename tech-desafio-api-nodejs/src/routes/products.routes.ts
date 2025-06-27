import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ProductsController } from "../controllers/products.controller";

const productsRoutes = Router();

const productsController = new ProductsController();

productsRoutes.post("/", ensureAuthenticated, productsController.create);
productsRoutes.get("/", ensureAuthenticated, productsController.findAll);
productsRoutes.get("/:id", ensureAuthenticated, productsController.findById);
productsRoutes.put("/:id", ensureAuthenticated, productsController.update);
productsRoutes.delete("/:id", ensureAuthenticated, productsController.delete);

export { productsRoutes };
