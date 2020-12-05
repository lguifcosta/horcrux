
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
server
//receber os dados do rec.body
.use(express.urlencoded({ extended: false}))
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas de aplicação
.get("/", pageLanding)
.get("/ajudar", donate)
.get("/cadastro", register)
.post("/saveOng" , saveOng)    
.get("/more", pageMore )
.get("/log", login)
.post("/loged", loged)
.get("/654484854814815121494611vdvvds", manager)
.post("/admit", admit);
//start do servidor
const port = process.env.PORT || 3000;

server.listen(port);
console.log(`a porta é ${port}`)