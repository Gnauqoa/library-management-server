import express from "express";
import authorRouter from "./author.js";
import userCardRouter from "./userCard.js";

const router = express.Router();

router.use("/userCards", userCardRouter);
router.use("/author", authorRouter);
export default router;
