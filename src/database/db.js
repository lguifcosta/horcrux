const Database = require('sqlite-async')
const createProffy = require('./createProffy')


function execute(db) {
    //criar as tabelas do banco de dados

    

    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            number TEXT,
            pix TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
           
            proffy_id INTEGER
        );
                
       
    `)
}
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)