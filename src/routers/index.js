import express from "express";
import authorRouter from "./author.js";
import bookRouter from "./book.js";
import managerRouter from "./manager.js";
import publisherRouter from "./publisher.js";
import userCardRouter from "./userCard.js";

const router = express.Router();

router.use("/userCards", userCardRouter);
router.use("/author", authorRouter);
router.use("/publisher", publisherRouter);
router.use("/book", bookRouter);
router.use("/manager", managerRouter);

export default router;
