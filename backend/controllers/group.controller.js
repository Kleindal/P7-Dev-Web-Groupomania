const { dataBaseAsync} = require('../bd-config/database');

async function queryOneGroup(id) {
    const sql = 'SELECT * FROM `group` WHERE id = ?';
    const results = await dataBaseAsync.execute(sql, [id]);
    return results[0][0];
}

module.exports.getGroups = async (req, res, next) => {
    const sql = 'SELECT * FROM `group`';
    const results = await dataBaseAsync.execute(sql, [])
        .catch(() => res.status(500).json());
    res.status(200).json(results[0] ?? []);
};

module.exports.getGroup = async (req, res) => {
    const result = await queryOneGroup(req.params.id)
        .catch (() => res.status(500).json());
    if (!result) {
        res.status(404).json({ error: "Not found" })
    }
    res.status(200).json(result);
};

module.exports.createGroup = async (req, res, next) => {
    // console.log(req.connectedUser);
    // return res.status(200).json();
    const sql = 'INSERT INTO `group` (title, created_by) VALUES (?, ?)';
    const result = await dataBaseAsync.execute(sql, [req.body.title, req.connectedUser.id])
        .catch(() => res.status(500).json());
    const insertedId = result[0].insertId;
    const createdGroup = await queryOneGroup(insertedId);
    return res.status(201).json(createdGroup);
};

module.exports.updateGroup = async (req, res, next) => {
    const group = await queryOneGroup(req.params.id);
    const isAdmin = req.connectedUser.is_admin === 1;
    const isGroupCreator = req.connectedUser.id === group.created_by;
    const canUpdateGroup = isAdmin || isGroupCreator;
    if (!canUpdateGroup) {
        return res.status(403).json();
    }    

    const sql = 'UPDATE `group` SET title = ? WHERE id = ?';
    await dataBaseAsync.execute(sql, [req.body.title, req.params.id])
        .catch (() => res.status(500).json());
    const updatedGroup = await queryOneGroup(req.params.id);
    return res.status(200).json(updatedGroup);
};

module.exports.deleteGroup = async (req, res, next) => {
    const canDeleteGroup = req.connectedUser.is_admin === 1;
    if (!canDeleteGroup) {
        return res.status(403).json();
    }

    const sql = 'DELETE FROM `group` WHERE id = ?';
    await dataBaseAsync.execute(sql, [req.params.id])
        .catch (() => res.status(500).json());
    return res.status(200).json();
};


module.exports.joinGroup = async (req, res, next) => {
    const sql = 'INSERT INTO `group_user` (group_id, user_id) VALUES (?,?)';
    await dataBaseAsync.execute(sql, [req.params.id, req.connectedUser.id])
        .catch(() => res.status(500).json());
    res.status(200).json();
};
module.exports.leaveGroup = async (req, res, next) => {
    const sql = 'DELETE FROM `group_user` WHERE group_id = ? AND user_id = ?';
    await dataBaseAsync.execute(sql, [req.params.id, req.connectedUser.id])
        .catch(() => res.status(500).json());
    res.status(200).json();
};



async function queryOneMessage(id, groupId) {
    const sql = 'SELECT * FROM `message` WHERE id = ? AND group_id = ?';
    const results = await dataBaseAsync.execute(sql, [id, groupId]);
    return results[0][0];
}

module.exports.getMessages = async (req, res, next) => {
    const sql = 'SELECT * FROM `message` WHERE group_id = ?';
    const results = await dataBaseAsync.execute(sql, [req.params.group_id])
        .catch(() => res.status(500).json());
    res.status(200).json(results[0] ?? []);
};

module.exports.createMessage = async (req, res, next) => {
    const sql = 'INSERT INTO `message` (author_id, group_id, text) VALUES (?,?,?)'
    const result = await dataBaseAsync.execute(sql, [req.connectedUser.id, req.params.group_id, req.body.text])
        .catch(() => res.status(500).json());
    const insertedId = result[0].insertId;
    const createdMessage = await queryOneMessage(insertedId, req.params.group_id);
    return res.status(201).json(createdMessage);
};

module.exports.deleteMessage = async (req, res, next) => {
    const isAdmin = req.connectedUser.is_admin === 1;
    const message = await queryOneMessage(req.params.id, req.params.group_id);
    const isMessageCreator = req.connectedUser.id === message?.author_id;
    const canDeleteMessage = isAdmin || isMessageCreator;
    if (!canDeleteMessage) {
        return res.status(403).json();
    }

    const sql = 'DELETE FROM `message` WHERE id = ? AND group_id = ?';
    await dataBaseAsync.execute(sql, [req.params.id, req.params.group_id])
        .catch (() => res.status(500).json());
    return res.status(200).json();
};
