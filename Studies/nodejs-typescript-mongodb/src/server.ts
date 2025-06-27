import express from "express";
import cors from "cors";
import morgan from "morgan";

import mainRoutes from "./routes/main.routes";

import "./services/database";

const app = express();

app.set("port", process.env.PORT || 3333);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/", mainRoutes);

app.listen(app.get("port"), () =>
  console.log(`Server is running - ${app.get("port")}`)
);
