let express = require('express')

let app = express()

app.listen(3000, function(){
    console.log("자 이제 시작이야! 내꿈을!")
})

app.get('/', function (req, res) {
    res.send("<h1>hi friends!<h1>")
})

