const app = require('express')()
const db = require('../Model/DB')

app.get('/envio',(req,res)=>{
    //RETORNA TODOS OS VALORES DA TABELA FORMULARIO
    const sql = "SELECT * FROM formulario"
    db.query(sql,(err,results)=>{
        if(err)throw err
        res.status(200).send({msg:'sucess',results})
    })
    
})

.post('/envio',(req,res)=>{
    const {cpf,name,email} = req.body
    
      const sql = `SELECT * FROM formulario WHERE  cpf = ${cpf}`

      //VERIFICA SE O CPF JÁ EXISTE SE SIM ELE RETORNA COM A MSG CPF JA EXISTE
    db.query(sql,(err,results)=>{
        if(err)throw err

        if(results.length >0)return res.status(200).send({msg:'cpf já existe'})

        //SE N EXISTIR CPF ELE MANDA TODOS OS DADOS PARA O BANCO DE DADOS
        const save = `INSERT INTO formulario(name,email,cpf) VALUES('${name}','${cpf}','${email}')`

        db.query(save,(err,response)=>{
            if(err)throw err

            return res.status(200).send({msg:'sucesso ao inserir os dados'})
        })
    })
})
module.exports = app