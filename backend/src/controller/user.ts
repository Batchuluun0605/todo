import { UserModel } from "../model/User";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
type SignUpType = {
  username: string;
  password: string;
  avatarImage: Buffer;
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
  } catch (error) {
    return res.status(400).send({ success: false, error: "Invalid request" });
  }
};
