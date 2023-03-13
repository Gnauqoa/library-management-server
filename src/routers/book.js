import express from "express";
import { addBook, getBooks } from "../controllers/book/index.js";
import pageResponse from "../middleware/pageResponse.js";

const bookRouter = express.Router();

bookRouter.post("/", addBook);
bookRouter.get("/", pageResponse, getBooks);

export default bookRouter;
