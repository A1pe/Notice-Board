import morgan from 'morgan';
import express from 'express';
import globalRouter from './src/routers/globalRouter';
import userRouter from './src/routers/userRouter';
import viewRouter from './src/routers/viewRouter';

const app = express();
const loggerMiddleWare = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");

app.use(loggerMiddleWare);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/view", viewRouter);



app.listen(3000, function(){
    console.log("자 이제 시작이야! 내꿈을!")
})



