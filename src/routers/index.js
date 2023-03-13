import express from "express";
import authorRouter from "./author.js";
import bookRouter from "./book.js";
import publisherRouter from "./publisher.js";
import userCardRouter from "./userCard.js";

const router = express.Router();

router.use("/userCards", userCardRouter);
router.use("/author", authorRouter);
router.use("/publisher", publisherRouter);
router.use("/book", bookRouter);

export default router;
