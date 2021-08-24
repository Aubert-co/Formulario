const app = require('express')()
const cors = require('cors')
const index = require('./index')

//ADICIONEI O CORS PRA N DA ERRO NO NAVEGADOR
app.use(cors())
app.use(index)



module.exports = app