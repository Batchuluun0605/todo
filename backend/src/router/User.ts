import express from "express";
import { LogIn, signUp } from "../controller/user";
const auth = express.Router();
auth.route("/signup").post(signUp);
auth.route("/login").get(LogIn);
export default auth;
