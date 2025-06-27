import { Router } from "express";
import { AuthenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { productsRoutes } from "./products.routes";

const routes = Router();

routes.use("/sessions", AuthenticateRoutes);
routes.use("/users", usersRoutes);
routes.use("/products", productsRoutes);

export { routes };
