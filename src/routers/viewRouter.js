import express from "express";
import { reg, viewHome, viewEdit, viewDelete } from "../controller/viewController";

const viewRouter = express.Router();

viewRouter.get("/reg", reg);

viewRouter.get("/:id(\\d+)", viewHome);
viewRouter.get("/:id(\\d+)/edit", viewEdit);
viewRouter.get("/:id(\\d+)/delete", viewDelete);

export default viewRouter;