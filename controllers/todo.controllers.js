import Todo from "../models/todo.model.js";

export const getAllTask = async (req, res, next) => {
  try {
    let task = await Todo.find();
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const findByIdTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await Todo.findById(taskId);
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const uploadTask = async (req, res, next) => {
  const { task, isCompleted } = req.body;
  try {
    let newTask = new Todo({
      task,
      isCompleted,
    });
    await newTask.save();
    return res.status(201).json({ newTask });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req, res, next) => {
  const { task, isCompleted } = req.body;
  try {
    const taskId = req.params.id;
    const taskData = await Todo.findById(taskId);
    taskData.task = task;
    taskData.isCompleted = isCompleted;
    await taskData.save();
    return res.status(200).json({ taskData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.id;
    const task = await Todo.findOneAndDelete(taskId);
    return res.status(200).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
