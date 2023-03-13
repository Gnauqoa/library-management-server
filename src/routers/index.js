import express from "express";
import authorRouter from "./author.js";
import publisherRouter from "./publisher.js";
import userCardRouter from "./userCard.js";

const router = express.Router();

router.use("/userCards", userCardRouter);
router.use("/author", authorRouter);
router.use("/publisher", publisherRouter);

export default router;
