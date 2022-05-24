const { dataBase, dataBaseAsync} = require('../bd-config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.getUsers = (req, res, next) => {
    let sql = `SELECT * FROM user`;
    dataBase.execute(sql, (err, result)=> {
        if (err) res.status(400).json({ err });
        else res.status(200).json(result)
        console.log(result)
    });
};




// PROFILE
module.exports.profileUsers = (req, res) => {
    let sql = `SELECT * FROM user WHERE id = ?`;
    dataBase.execute(sql, [req.userId], (err, results) => {
        console.log(results)
        const userMe = results[0];
        delete userMe.password
        res.status(200).json(userMe)
    });
};

// ALL PROFILE
module.exports.profilesContacts = (req, res, next) => {
    let sql = `SELECT id, name, surname, email FROM user`;
    dataBase.execute(sql, [], (err, results) => {
        console.log(results)
        res.status(200).json(results)
    });
};

module.exports.deleteUsers = (req, res) => {
    let sql1 = `DELETE FROM user WHERE id = ?`;
    let sql2 = `SELECT * FROM user WHERE id = ?`;
    console.log(req.userId)
    dataBase.execute(sql2, [req.userId], (err, results) => {
        if (err) {
            return res.status(500).json({error : err});
        }
        if (results) {
            if (results [0].id == req.userId || results [0].is_admin == 1) {
                dataBase.execute(sql1, [req.userId], (err, results) => {
                    console.log(results)
                    if (err) {
                        return res.status(500).json({error : err});
                    }
                    res.status(200).json(results)
                });
            }
        }
    });
};

module.exports.updateUsers = async (req, res) => {
    const canUpdateUser = req.params.id == req.userId;
    if (!canUpdateUser) {
        res.status(403).json({error: 'You cannot update this user'});
    }
    // console.log('id dans url: ' + req.params.id)
    // console.log('id de l\'user: ' + req.userId)

    const sqlUpdateEmail = `UPDATE user SET email = ? WHERE id = ?`;
    await dataBaseAsync.execute(sqlUpdateEmail, [req.body.email, req.params.id])
        .catch(error => res.status(500).json({ error }));

    const sqlRetrieveUser = `SELECT id, name, surname, email FROM user WHERE id = ?`;
    const results = await dataBaseAsync.execute(sqlRetrieveUser, [req.params.id])
        .catch(error => res.status(500).json({ error }));
    const resultIsEmpty = results[0].length === 0;
    if (resultIsEmpty) {
        res.status(404).json({ error: "Not found" })
    }
    res.status(200).json(results[0][0]);
};

module.exports.getUserGroups = async (req, res) => {
    // Association 2 tables group_user et group 
    // Filtrer sur les membres du groupe et le créateur du groupe
    const sql = `SELECT g.*
        FROM \`group\` g
        LEFT JOIN group_user gu ON gu.group_id = g.id
        WHERE gu.user_id = ? OR g.created_by = ?
    `;
    const result = await dataBaseAsync.execute(sql, [req.params.id, req.params.id])
        .catch ((e) => res.status(500).json(e));
    return res.status(200).json(result[0]);
}