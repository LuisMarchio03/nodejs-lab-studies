import { Router } from "express";
import { CreateProductsController } from "./controllers/CreateProductsController";
import { ReadProductsController } from "./controllers/ReadProductsController";

const router = Router();

const createProductController = new CreateProductsController();
const readProductsController = new ReadProductsController();

router.post("/products", createProductController.create);
router.get("/products", readProductsController.read);

export { router };
