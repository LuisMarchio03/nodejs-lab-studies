import mongoose from "mongoose";

const URI = process.env.MONGO_DB_URI;

mongoose
  .connect(URI as string)
  .then(() => console.log("MongoDB - DB is Up!"))
  .catch((err: Error) => console.log(err));
