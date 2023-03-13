import express from "express";
import { addAuthor } from "../controllers/author/index.js";

const authorRouter = express.Router();

authorRouter.post("/current", addAuthor);

export default authorRouter;
