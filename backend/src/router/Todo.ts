import express from "express";

import { createTodo, getAllTodo, userIdTodos } from "../controller/Todo";
const todo = express.Router();
todo.route("/").post(createTodo).get(getAllTodo);
todo.route("/:id").get(userIdTodos);
export default todo;
