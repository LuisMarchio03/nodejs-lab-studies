import { Router } from "express";
import { AuthenticateController } from "../controllers/authenticate.controller";

const AuthenticateRoutes = Router();

const authenticateController = new AuthenticateController();

AuthenticateRoutes.post("/", authenticateController.handle);

export { AuthenticateRoutes };
