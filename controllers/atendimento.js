// rotas
// buse é metodo da biblioteca express
// console.log(req.body)
// o conteudo do bory e o atendimento
// errado dataCriacaoRegistro  correto dataRegistro

const agenda = require('../models/agenda')

module.exports = app => { 
    app.get('/atendimentos',(req, res) => res.send('Você está na rota de atendimentos e está realizando um GET'))

    app.post('/atendimentos', (req, res) => { 
        
        const atendimento = req.body
        agenda.adiciona(atendimento)
        res.send('Você está na rota de atendimentos e está realizando um POST')
      

    })
}
