const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const app = express()

const serveMiddleware = serveStatic(path.resolve(__dirname,'static'))

app.use('/assets', serveMiddleware)

function handlerSearch(request,response){
    response.send(request.query.v)
}

function rootHandler(request,response){
    response.send("<font size='20' color='pink'>hola</font>")
    response.status(404)
}

//app.all('/',rootHandler)
app.get('/Search',handlerSearch)
app.listen(9000)