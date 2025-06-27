import { Router } from "express";

import { CreateProductsController } from "../useCases/Products/CreateProducts/CreateProductsController";
import { GetProductsController } from "../useCases/Products/GetProducts/GetProductsController";
import { GetProductByIdController } from "../useCases/Products/GetProductById/GetProductByIdController";
import { GetProductsByUserIdController } from "../useCases/Products/GetProductsByUserId/GetProductsByUserIdController";
import { UpdateProductsController } from "../useCases/Products/UpdateProducts/UpdateProductsController";
import { DeleteProductsController } from "../useCases/Products/DeleteProducts/DeleteProductsController";

import { CreateUsersController } from "../useCases/Users/CreateUsers/CreateUsersController";
import { GetUsersController } from "../useCases/Users/GetUsers/GetUsersController";
import { GetUserByIdController } from "../useCases/Users/GetUserById/GetUserByIdController";
import { UpdateUsersController } from "../useCases/Users/UpdateUsers/UpdateUsersController";
import { DeleteUsersController } from "../useCases/Users/DeleteUsers/DeleteUsersController";

const router = Router();

router.post("/products", new CreateProductsController().handle);
router.get("/products", new GetProductsController().handle);
router.get("/products/:id", new GetProductByIdController().handle);
router.get("/products/:userId", new GetProductsByUserIdController().handle);
router.put("/products/:id", new UpdateProductsController().handle);
router.delete("/products/:id", new DeleteProductsController().handle);

router.post("/users", new CreateUsersController().handle);
router.get("/users", new GetUsersController().handle);
router.get("/users/:id", new GetUserByIdController().handle);
router.put("/users/:id", new UpdateUsersController().handle);
router.delete("/users/:id", new DeleteUsersController().handle);

export { router };
