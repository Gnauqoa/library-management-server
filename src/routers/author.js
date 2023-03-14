import express from "express";
import { addAuthor } from "../controllers/author/index.js";
import managerAuth from "../middleware/managerAuth.js";

const authorRouter = express.Router();

authorRouter.post("/", managerAuth, addAuthor);

export default authorRouter;
