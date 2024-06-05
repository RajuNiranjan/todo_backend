import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT;

console.log(port);

// app.use(express.config());

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log("server is connected to DB"))
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`server is runnig at port no ${port}`));
