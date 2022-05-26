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