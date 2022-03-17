const dataBase = require('../bd-config/database')

module.exports.getUsers = (req, res, next) => {
    
let sql = `SELECT * FROM users`;

    dataBase.execute(sql, (err, result)=> {
        if (err) res.status(400).json({ err });
        else res.status(200).json(result)
        console.log(result)
    });
};