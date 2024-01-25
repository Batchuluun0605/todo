import express from "express";
import { connectDatabase } from "./Utils/database";
import { UserModel } from "./model/User";
import auth from "./router/User";
import cors from "cors";
const PORT = 8000;

const start = () => {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use("/auth", auth);
  connectDatabase();
  app.get("/", (req, res) => {
    res.status(200).send({ UserModel, success: true, message: "hello world" });
  });
  // app.get("/users", async (req, res) => {
  //   const users = await UserModel.find();
  //   res.send(users);
  // });
  // app.get("/user", async (req, res) => {
  //   const { username } = req.body;
  //   const user = await UserModel.findOne();
  // });
  // app.post("/", async (req, res) => {
  //   const { username, password } = req.body;
  //   const user = await UserModel.create({
  //     username: username,
  //     password: password,
  //   });
  //   res.send(user);
  // });
  app.listen(8000, () => {
    console.log("server running");
  });
};
start();
