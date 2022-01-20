import express from "express";
import { registeriew } from "../controllers/videoController";

const apiRouter = express.Router();

apiRouter.post("/videos/:id([0-9a-f]{24})/view", registeriew);

export default apiRouter;