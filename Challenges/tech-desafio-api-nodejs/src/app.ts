import "dotenv/config";
import "./db/database";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
);

export { app };
