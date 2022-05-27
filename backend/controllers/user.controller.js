const { dataBaseAsync } = require('../bd-config/database');
const bcrypt = require('bcrypt');
const { asyncForEach } = require('../utils/async-foreach');

function removePrivateInfo(user) {
    delete user.password;
    delete user.is_admin;
    delete user.has_accepted_cgu;
    return user;
}

async function queryOneUser(id) {
    const sql = `SELECT * FROM user WHERE id = ?`;
    const user = await dataBaseAsync.execute(sql, [id])
        .then(results => results[0][0]);
    return removePrivateInfo(user);
}

module.exports.getUsers = async (req, res, next) => {
    let sql = `SELECT * FROM user`;
    const users = await dataBaseAsync.execute(sql)
        .catch(() => res.status(500).json())
        .then(results => results[0]);
    users.forEach(user => removePrivateInfo(user));
    res.status(200).json(users);
};

// Profil user connected ou profil spécifique
module.exports.getUser = async (req, res) => {
    const userId = req.params.id === 'me' ? req.connectedUser.id : req.params.id;
    const user = await queryOneUser(userId);
    res.status(200).json(user);
};

module.exports.updateUser = async (req, res) => {
    const userId = req.params.id === 'me' ? req.connectedUser.id : req.params.id;
    const isAdmin = req.connectedUser.is_admin === 1;
    const isOwnerAccount = userId == req.connectedUser.id;
    const canUpdateUser = isAdmin || isOwnerAccount;
    if (!canUpdateUser) {
        res.status(403).json({error: 'You cannot update this user'});
    }

    const sqlUpdate = `UPDATE user SET :fieldsToUpdate WHERE id = ?`;
    const sqlToUpdateParts = [];
    const body = req.body;
    
    await asyncForEach(Object.keys(body), async (key) => {
        if (key === 'id') {
            return;
        }
        let value = body[key];
        if (key === 'password') {
            value = await bcrypt.hash(value, 10);
            console.log(key, value);
        }
        sqlToUpdateParts.push(`${key} = '${value}'`);
    });
    const sqlToUpdate = sqlToUpdateParts.join(', ');
    const sqlToExecute = sqlUpdate.replace(':fieldsToUpdate', sqlToUpdate);

    await dataBaseAsync.execute(sqlToExecute, [userId])
        .catch(error => res.status(500).json({ error }));

        // add bio / modifier nom prénom et bio 
    const user = await queryOneUser(userId);
    res.status(200).json(user);
};

module.exports.deleteUser = async (req, res) => {
    const userId = req.params.id === 'me' ? req.connectedUser.id : req.params.id;
    const isAdmin = req.connectedUser.is_admin === 1;
    const isOwnerAccount = userId == req.connectedUser.id;
    const canDelete = isAdmin || isOwnerAccount;
    if (!canDelete) {
        return res.status(403).json();
    }

    const sql = 'DELETE FROM `user` WHERE id = ?';
    await dataBaseAsync.execute(sql, [userId])
        .catch (() => res.status(500).json());
    return res.status(200).json();
};