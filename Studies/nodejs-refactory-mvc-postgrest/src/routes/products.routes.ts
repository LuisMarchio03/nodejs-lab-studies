import express from "express";
import { ProductsController } from "../controllers/ProductsController";

const router = express.Router();

const productsController = new ProductsController();

router.get("/products", productsController.read);
router.get("/products/:id", productsController.readById);
router.post("/products", productsController.create);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.remove);

export default router;
