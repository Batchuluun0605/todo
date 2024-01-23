import express from "express";
import { signUp } from "../controller/user";
const auth = express.Router();
auth.route("/signup").post(signUp);
export default auth;
