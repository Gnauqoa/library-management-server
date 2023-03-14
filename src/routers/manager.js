import express from "express";
import { login, register } from "../controllers/manager/index.js";

const managerRouter = express.Router();

managerRouter.post("/login", login);
managerRouter.post("/", register);

export default managerRouter;
