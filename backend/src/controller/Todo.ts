import { Express } from "express";
import { TodoModel } from "../model/Todo";
import { Request, Response } from "express";
// type TodoType = {
//   title: string;
//   description: string;
//   priority: string;
//   label: string;
// };
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, userId, description, priority, label } = req.body;
    const createTodos = await TodoModel.create({
      title,
      userId,
      description,
      priority,
      label,
    });
    console.log(createTodos);

    return res.status(200).send({ success: true, createTodos });
  } catch (error) {
    console.log(error);
  }
};
export const getAllTodo = async (req: Request, res: Response) => {
  try {
    // const { userId } = req.body;
    const getAllTodos = await TodoModel.find();
    console.log(getAllTodos);
    return res.status(200).send({ success: true, getAllTodos });
  } catch (error) {
    return res.status(400).send({ success: false, error });
  }
};
export const userIdTodos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const getOneUserIdTodos = await TodoModel.findOne({ userId: id }).populate(
      "userId"
    );
    return res.status(200).send({ success: true, getOneUserIdTodos });
  } catch (error) {
    return res.status(400).send({ success: true, error });
  }
};
