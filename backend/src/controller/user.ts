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
};
export const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password }: Required<SignUpType> = req.body;
    const saltRounds = 10;
    bcrypt.hash(
      password,
      saltRounds,
      async function (error: Error | undefined, hash: String) {
        try {
          const result = await UserModel.create({ username, password: hash });
          console.log(result);
        } catch (error) {
          throw new Error(JSON.stringify(error));
        }
      }
    );
    return res.status(201).send({ success: true });
  } catch (error: any) {
    return res.status(400).send({ success: false, error: "Invalid request" });
  }
};
export const LogIn = async (req: Request, res: Response) => {
  try {
    const { username, password }: { username: string; password: string } =
      req.body;

    const user: LogInType | null = await UserModel.findOne({
      username: username,
    });
    console.log(user);

    if (!user) {
      return res.status(400).send({ success: false, msg: "User not found" });
    } else {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (!result) {
          return res.send({
            success: false,
            msg: "Username or password incorrect",
          });
        } else {
          return res.send({ success: true, user });
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};
