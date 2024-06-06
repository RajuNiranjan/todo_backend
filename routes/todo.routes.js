import express from "express";
import {
  deleteTask,
  findByIdTask,
  getAllTask,
  updateTask,
  uploadTask,
} from "../controllers/todo.controllers.js";

const router = express.Router();

router.get("/", getAllTask);
router.get("/findById/:id", findByIdTask);
router.post("/uploadTask", uploadTask);
router.patch("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);

export default router;
