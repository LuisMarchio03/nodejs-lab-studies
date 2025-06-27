import express from "express";
import cors from "cors";
import errorHandler from "./middlewares/error.handler.middleware";

import productsRoutes from "./routes/products.routes";

const app = express();

// Application Settings
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Settings
app.use(productsRoutes);

// Error Handlers Configuration
app.use(errorHandler);

export default app;
