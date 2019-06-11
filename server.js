const express = require('express')
const app = express()

function myFirstMiddleware(request,response,next){
    console.log("soy un middleware")
    next()
}
function stopMiddleware(request,response,next){
    response.send("<h1>STOP </h1>")
}
app.use(stopMiddleware)
app.use(myFirstMiddleware)


function handlerSearch(request,response){
    response.send(request.query.v)
}

function rootHandler(request,response){
    response.send("<font size='20' color='pink'>hola</font>")
    response.status(404)
}

app.all('/',rootHandler)
app.get('/Search',handlerSearch)
app.listen(9000)