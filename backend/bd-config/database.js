const mysql = require('mysql2');

// const database = require("mime-db")

// const dataBase = {
//     hote:'localhost',
//     db_name:'groupomania',
//     db_password:'password',
//     db_type:'mysql',
// }

const dataBase = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'groupomania',
});

module.exports = dataBase;

// .promise(console.log('connection réussie'))