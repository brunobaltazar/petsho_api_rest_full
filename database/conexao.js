const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'api',
    password: 'api',
    database: 'agenda-petshop'
})

module.exports = conexao