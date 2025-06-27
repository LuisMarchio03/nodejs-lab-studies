import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error.handler.middleware";

import categoryRoutes from "./routes/category.routes";
import postRoutes from "./routes/post.routes";

const app = express();

// Configurações da aplicação
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurações de Rotas
app.use(categoryRoutes);
app.use(postRoutes);

// Configuração dos Handlers de erro
app.use(errorHandler);

export default app;
