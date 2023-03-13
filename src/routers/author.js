import express from "express";
import { addAuthor } from "../controllers/author/index.js";

const authorRouter = express.Router();

authorRouter.post("/", addAuthor);

export default authorRouter;
