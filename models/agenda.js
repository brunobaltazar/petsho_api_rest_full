const conexao = require('../database/conexao')

class Agenda {
    adiciona(criarAgenda) { // criando metodo 
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, criarAgenda, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }
}


// criado modulo da classe Agenda para ser exportada para controller
module.exports = new Agenda