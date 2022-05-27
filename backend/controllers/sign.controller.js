const { dataBase, dataBaseAsync} = require('../bd-config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// SIGN UP
module.exports.signupUsers = (req, res, next) => {
    let sql = `INSERT INTO user (email, password, name, surname, has_accepted_cgu) VALUES (?,?,?,?,1)`;
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        dataBase.execute(sql, [req.body.email, hash, req.body.name, req.body.surname], (err, result) => {
            if (err) res.status(400).json({ err });
            else res.status(200).json('Utilisateur crée')
        });
      })
    .catch(error => res.status(500).json({ error })); 
};

// SIGN IN
module.exports.signinUsers = (req, res) => {
    let sql = `SELECT * FROM user WHERE email = ?`;
    dataBase.execute(sql, [req.body.email], (err, users) => {
        console.log(users)
        if (err) {
            return res.status(500).json({error : err});
        }
        if (users.length == 0) {
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