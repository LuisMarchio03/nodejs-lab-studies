import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import errorHandler from "./middleware/errorHandlerMiddleware";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import { router } from "./routes/index";

const app = express();
const serverHttp = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

export { serverHttp, io };
