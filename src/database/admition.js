const dataBase2 = require('sqlite-async');
const addOnONGs = require("./addOnONGs")

function admited (add){
    return add.exec(`
    CREATE TABLE IF NOT EXISTS profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    number TEXT,
    pix TEXT,
    bio TEXT
    );
    `)
}


module.exports = dataBase2.open(__dirname + '/profiles.sqlite').then(admited)