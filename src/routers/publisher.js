import express from "express";
import { addPublisher } from "../controllers/publisher/index.js";

const publisherRouter = express.Router();

publisherRouter.post("/", addPublisher);

export default publisherRouter;
