// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

// utilizar o objeto de bando de dados, para nossas operações
/*db.serialize(() =>{
    db.run(`
        
    CREATE TABLE IF NOT EXISTS places(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        name TEXT,
        address TEXT,
        address2 TEXT,
        state TEXT,
        city TEXT,
        items TEXT
     );`
    )
})


const query = `
      INSERT INTO PLACES(
          IMAGE,
          NAME,
          ADDRESS,
          address2,
          STATE,
          CITY,
          ITEMS)
    VALUES(?,?,?,?,?,?,?);
`
db.run(query, [
   "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
   "Paperside",
   "Guilherme Gemballa, Jardin América",
   "Número 260",
   "Saanta Catarina",
   "Rio do Sul",
   "Resíduos Eletrônicos, Lâmpadas",

])

db.all(`SELECT * FROM places`, function(err, rows){
    if (err){
        return console.log(err)
    }
    console.log(rows)
})*/
