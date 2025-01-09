import express from "express";
import {
  createTodoList,
  getTodoLists,
  getTodoList,
  updateTodoList,
  deleteTodoList,
} from "../Controller/todoController.js";
import { validateInput } from "../Config/validation.js";

let router = express.Router();

router
  .route("/todos")
  .post(validateInput.todo, createTodoList)
  .get(getTodoLists);

router
  .route("/todos/:id")
  .get(getTodoList)
  .put(validateInput.todo, updateTodoList)
  .delete(deleteTodoList);
export default router;
