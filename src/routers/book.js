import express from "express";
import { addBook, getBooks } from "../controllers/book/index.js";

const bookRouter = express.Router();

bookRouter.post("/", addBook);
bookRouter.get("/", getBooks);

export default bookRouter;
