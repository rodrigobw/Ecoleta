const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db.js")

//habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({extended: true}))

//configurar pasta publica
server.use(express.static("public"))


//utilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


//configurar caminhos da minha aplicação
//pagina inicial
//req: requisicao
//res: resposta

server.get("/", (req, res) =>{
    return res.render("index.html")
})

server.get("/create-point", (req, res) =>{
    
    return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {
    console.log(req.body)
    
    const query = `
      INSERT INTO PLACES(
          IMAGE,
          NAME,
          ADDRESS,
          address2,
          STATE,
          CITY,
          ITEMS)
    VALUES(?,?,?,?,?,?,?);`

    const values =  [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items
    ]
    function afterInsertData(err){
        if(err){
            console.log(err)
            return res.send("Erro no cadastro!")
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
        return res.render("create-point.html", {saved: true})
    }
    
    db.run(query, values, afterInsertData)
})




server.get("/search-results", (req, res) =>{
    
    const search = req.query.search

    if (search == ""){
        //caixa de search vazia(sem filtro)
        return res.render("search-results.html", {total: 0})  
    }

    db.all(`SELECT * FROM places WHERE city like '%${search}%'`, function(err, rows){
        if (err){
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total: total})  
    })  
})

//ligar o servidor
server.listen(3000)