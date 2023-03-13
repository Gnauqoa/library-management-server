import express from "express";
import userCardRouter from "./userCard.js";

const router = express.Router();

router.use("/userCards", userCardRouter);

export default router;
