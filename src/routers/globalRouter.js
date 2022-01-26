import express from "express";
import { home, list } from "../controller/globalController";
import { login, join } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/list", list);

export default globalRouter;