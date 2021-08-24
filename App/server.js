const express = require('express')
const app = express()


app.use(express.json())

const route = require('./route/rotas')
app.use(route)

app.listen(8080,()=>{
    console.log('running at port 8080')
})
