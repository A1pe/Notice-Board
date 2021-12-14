import morgan from 'morgan';
import express from 'express';

const app = express();
const loggerMiddleWare = morgan("dev");
app.use(loggerMiddleWare)

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("Home");
globalRouter.get("/", handleHome);
const handleReg = (req, res) => res.send("Reg");
globalRouter.get("/reg", handleReg);
const handleList = (req, res) => res.send("List");
globalRouter.get("/list", handleList);

const userRouter = express.Router();
const handleJoin = (req, res) => res.send("Join User");
userRouter.get("/join", handleJoin);
const handleLogin = (req, res) => res.send("Login User");
userRouter.get("/login", handleLogin);


const viewRouter = express.Router();
const handleViewHome = (req, res) => res.send("View Home")
viewRouter.get("", handleViewHome);
const handleViewEdit = (req, res) => res.send("View Edit")
viewRouter.get("/edit", handleViewEdit);
const handleViewDelete = (req, res) => res.send("View Delete")
viewRouter.get("/delete", handleViewDelete);

//const commentRouter = express.Router();

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/view", viewRouter);



app.listen(3000, function(){
    console.log("자 이제 시작이야! 내꿈을!")
})



