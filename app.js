import morgan from 'morgan'
import express from 'express'

const app = express()
const loggerMiddleWare = morgan("dev")

const controllerMain = (req, res, next) => {
    res.end();
}

const handleProtected = (req, res) => {
    return res.send("개인 공간에 오신것을 환영합니다")
}

const controllerHome = (req, res) => {
    res.send("<h1>hi friends!<h1>")
}

app.listen(3000, function(){
    console.log("자 이제 시작이야! 내꿈을!")
})


app.use(loggerMiddleWare)
app.get('/', controllerHome)
app.get('/public/main.html', controllerMain )
app.get('/protected',handleProtected)

