import express from "express";
import { register } from "../controllers/userCard/index.js";

const userCardRouter = express.Router();

userCardRouter.post("/current", register);

export default userCardRouter;
