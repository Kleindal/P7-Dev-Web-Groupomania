const dataBase = require('../bd-config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Token } = require('acorn');
const database = require('mime-db');

module.exports.getUsers = (req, res, next) => {
    let sql = `SELECT * FROM users`;

        dataBase.execute(sql, (err, result)=> {
            if (err) res.status(400).json({ err });
            else res.status(200).json(result)
            console.log(result)
        });
};

// SIGN UP
module.exports.signupUsers = (req, res, next) => {
    let sql = `INSERT INTO users (id, email, password, name, surname, has_accepted_cgu) VALUES (?,?,?,?,?,?)`;
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        dataBase.execute(sql, [req.body.id, req.body.email, hash, req.body.name, req.body.surname, req.body.has_accepted_cgu], (err, result) => {
            if (err) res.status(400).json({ err });
            else res.status(200).json('Utilisateur crée')
        });
      })
    .catch(error => res.status(500).json({ error })); 
};

// SIGN IN
module.exports.signinUsers = (req, res) => {
    let sql = `SELECT * FROM users WHERE email = ?`;
    dataBase.execute(sql, [req.body.email], (err, users) => {
        console.log(users)
        if (!users) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, users[0].password)
            .then(valid => {
                console.log(valid)
                if (!valid) {
                    return res.status(401).json({ error: 'Mot de passe incorrect !' });
                }
                res.status(200).json({
                    userId: users[0].id,
                    token: jwt.sign(
                        { userId: users[0].id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' }
                      )
                });
            })
        .catch(error => res.status(500).json({ error: 'invalid' }));
    });
};

// PROFILE
module.exports.profileUsers = (req, res) => {
    let sql = `SELECT * FROM users WHERE id = ?`;
    dataBase.execute(sql, [req.userId], (err, results) => {
        console.log(results)
        const userMe = results[0];
        delete userMe.password

        res.status(200).json(userMe)
    });
};

// ALL PROFILE
module.exports.profilesContacts = (req, res, next) => {
    let sql = `SELECT name, surname FROM users`;
    dataBase.execute(sql, [], (err, results) => {
        console.log(results)
        res.status(200).json(results)
    });
};
