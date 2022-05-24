// const database = require("mime-db")

// const dataBase = {
//     hote:'localhost',
//     db_name:'groupomania',
//     db_password:'password',
//     db_type:'mysql',
// }

const mysql = require('mysql2');
const dataBase = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'groupomania',
});

const mysqlAsync = require('mysql2/promise');
const dataBaseAsync = mysqlAsync.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: 'groupomania',
});

module.exports = {
    dataBase,
    dataBaseAsync
};

// .promise(console.log('connection réussie'))