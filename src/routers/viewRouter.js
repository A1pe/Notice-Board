import express from "express";
import { postReg ,getReg, viewHome, getEdit, viewDelete, postEdit } from "../controller/viewController";
    
const viewRouter = express.Router();

viewRouter.route("/reg").get(getReg).post(postReg);
viewRouter.get("/:id(\\d+)", viewHome);

//viewRouter.get("/:id(\\d+)/edit", getEdit);
//viewRouter.post("/:id(\\d+)/edit", postEdit); 두개를 하나로 합칠 수 있음.
viewRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

viewRouter.get("/:id(\\d+)/delete", viewDelete);

export default viewRouter;