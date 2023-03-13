import express from "express";
import { addBook } from "../controllers/book/index.js";

const bookRouter = express.Router();

bookRouter.post("/", addBook);

export default bookRouter;
