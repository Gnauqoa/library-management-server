import express from "express";
import { addBook, getBook, getBooks } from "../controllers/book/index.js";
import pageResponse from "../middleware/pageResponse.js";

const bookRouter = express.Router();

bookRouter.post("/", addBook);
bookRouter.get("/", pageResponse, getBooks);
bookRouter.get("/:id", getBook);

export default bookRouter;
