import express from "express";
import { logoutUser, editUser, seeUser, deleteUser } from "../controller/userController";

const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/delete", deleteUser);
userRouter.get("/logout", logoutUser);

userRouter.get("/:id(\\d+)", seeUser);

export default userRouter;