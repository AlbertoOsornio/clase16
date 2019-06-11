const express = require('express')

const app = express()

//const serveMiddleware = serveStatic(path.resolve(__dirname,'static'))
//app.use('/assets', serveMiddleware)


app.use('/assets',express.static('static'))

app.use(express.json())


function handlerSearch(request,response){
    response.send(request.query.v)
}

function rootHandler(request,response){
    response.send("<font size='20' color='pink'>hola</font>")
    response.status(404)
}

function authenticationHandler(request,response){
    //response.send("auth")
    console.log("llegue a auth")
    console.log(request.body)
    response.json(request.body)
}





app.all('/',rootHandler)
app.post('/auth',authenticationHandler)
app.get('/Search',handlerSearch)
app.listen(9000)