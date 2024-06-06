import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/todo.routes.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/task", router);

const PORT_NO = 5000 | process.env.PORT;

const DB_URI = process.env.MONGO_DB;

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Welcome back Raju" });
});

mongoose
  .connect(DB_URI)
  .then(() => console.log("server is connected to DB"))
  .catch((err) => console.log(err));

app.listen(PORT_NO, () =>
  console.log(`server is runnig at port number ${PORT_NO}`)
);
