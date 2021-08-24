const mysql = require('mysql')


//por padrao o host no wampserve é a 3306 o usuario root e o password "" e o database vai ser criado que é o users;
const con = mysql.createConnection({
    host:3306,
    user:'root',
    password:'',
    database:'users'
})

module.exports = con