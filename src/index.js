
//servidor
const express = require('express')
const server = express()


const { pageLanding, donate, register, saveOng , pageMore , login , loged , manager , admit } = require('./pages')
//configurar o nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express:server,
    noCache: true,
})
//inicio e configuração do servidor
//receber os dados do rec.body
server.use(express.urlencoded({ extended: false}))
//configurar arquivos estaticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas de aplicação
server.get("/", pageLanding)
server.get("/ajudar", donate)
server.get("/cadastro", register)
server.post("/saveOng" , saveOng)    
server.get("/more", pageMore )
server.get("/log", login)
server.post("/loged", loged)
server.get("/654484854814815121494611vdvvds", manager)
server.post("/admit", admit);
//start do servidor
const port = process.env.PORT || 8080;

server.listen(port);
console.log(`a porta é ${port}`)