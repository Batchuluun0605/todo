import { UserModel } from "../model/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
type SignUpType = {
  username: string;
  password: string;
  avatarImage: Buffer;
};
type LogInType = {
  username: string;
  password: string;
  avatarImage: Buffer;
};
export const signUp = async (req: Request, res: Response) => {
  const { username, password }: Required<SignUpType> = req.body;
  try {
    const result = await UserModel.create(username, password);
    console.log(result);
  } catch (error) {
    return res.status(400).send({ success: true });
  }
};
export const LogIn = async (req: Request, res: Response) => {
  const { username, password }: Required<LogInType> = req.body;
  try {
    const result = await UserModel.findOne({
      username: username,
      password: password,
    });
    console.log(result);
    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};
