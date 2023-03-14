import express from "express";
import { addPublisher } from "../controllers/publisher/index.js";
import managerAuth from "../middleware/managerAuth.js";

const publisherRouter = express.Router();

publisherRouter.post("/", managerAuth, addPublisher);

export default publisherRouter;
