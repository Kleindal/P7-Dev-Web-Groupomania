const config = {
    host: "localhost",
    user: "root",
    password: "root",
    database: 'groupomania_v2',
};

const mysql = require('mysql2');
const dataBase = mysql.createPool(config);

const mysqlAsync = require('mysql2/promise');
const dataBaseAsync = mysqlAsync.createPool(config);

module.exports = {
    dataBase,
    dataBaseAsync
};

// .promise(console.log('connection réussie'))