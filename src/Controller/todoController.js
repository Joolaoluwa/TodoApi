import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import { createTodoService } from "../Services/todoService.js";

export const createTodoList = async (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "Bad request",
      message: errors.array(),
    });
  }
  let { title, description, completed } = req.body;
  try {
    let todo = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: completed,
      createdAt: new Date().toISOString(),
    };
    let data = JSON.parse(createTodoService(todo));
    return res.status(201).json({
      status: "success",
      message: "Created todo list successfully",
      data: todo,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const getTodoLists = async (req, res) => {
  try {
    let data = fs.readFile("./src/todo.json", "utf-8", (err, data) => {
      if (err) console.log("Error reading file");
      console.log(data);
      let todoData = JSON.parse(data);
      return res.status(200).json({
        status: "Success",
        todoData,
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
export const getTodoList = (req, res) => {
  let { id } = req.params;
  try {
    let data = fs.readFile("./src/todo.json", "utf-8", (err, data) => {
      if (err) console.log("Error reading file");
      console.log(data);
      let todoData = JSON.parse(data);
      let findData = todoData.find(
        (item) => parseInt(item.id) === parseInt(id)
      );
      if (!findData) {
        return res.status(404).json({
          message: "Todo not found",
        });
      } else {
        return res.status(200).json({
          status: "Success",
          findData,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const updateTodoList = (req, res) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "Bad request",
      message: errors.array(),
    });
  }
  let { id } = req.params;
  let update = req.body;
  try {
    let data = fs.readFile("./src/todo.json", "utf-8", (err, data) => {
      if (err) console.log("Error reading file");
      console.log(data);
      let todoData = JSON.parse(data);
      let findData = todoData.find(
        (item) => parseInt(item.id) === parseInt(id)
      );
      if (!findData) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }
      let index = todoData.findIndex(
        (item) => parseInt(item.id) === parseInt(id)
      );

      if (index !== -1) {
        todoData[index] = { ...todoData[index], ...update };
      } else {
        todoData.push(update);
      }

      fs.writeFile(
        "./src/todo.json",
        JSON.stringify(todoData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
          findData = todoData.find((item) => item.id === id);
          res.status(200).json({
            status: "Successfully updated the file",
            findData,
          });
        }
      );
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const deleteTodoList = (req, res) => {
  let { id } = req.params;
  console.log(id);
  try {
    let data = fs.readFile("./src/todo.json", "utf-8", (err, data) => {
      if (err) console.log("Error reading file");
      console.log(data);
      let todoData = JSON.parse(data);
      let filteredList = todoData.filter((item) => {
        return item.id !== id;
      });
      console.log(filteredList);
      if (filteredList.length === todoData.length) {
        return res.status(404).json({
          message: "Item not found",
        });
      }
      fs.writeFile(
        "./src/todo.json",
        JSON.stringify(filteredList, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
          res.status(204).json();
        }
      );
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
