const { dataBaseAsync} = require('../bd-config/database');
const { asyncForEach } = require('../utils/async-foreach');

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
    const isAdmin = req.connectedUser.is_admin === 1;
    const canCreate = isAdmin;
    if (!canCreate) {
        return res.status(403).json();
    }    
    // console.log(req.connectedUser);
    // return res.status(200).json();
    const sql = 'INSERT INTO `group` (title) VALUES (?)';
    const result = await dataBaseAsync.execute(sql, [req.body.title])
        .catch(() => res.status(500).json());
    const insertedId = result[0].insertId;
    const createdGroup = await queryOneGroup(insertedId);
    return res.status(201).json(createdGroup);
};

module.exports.updateGroup = async (req, res, next) => {
    const isAdmin = req.connectedUser.is_admin === 1;
    const canUpdateGroup = isAdmin;
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
    const isAdmin = req.connectedUser.is_admin === 1;
    const canDeleteGroup = isAdmin;
    if (!canDeleteGroup) {
        return res.status(403).json();
    }

    const sql = 'DELETE FROM `group` WHERE id = ?';
    await dataBaseAsync.execute(sql, [req.params.id])
        .catch (() => res.status(500).json());
    return res.status(200).json();
};



async function queryOnePost(id, groupId) {
    const sql = 'SELECT * FROM `post` WHERE id = ? AND group_id = ?';
    const results = await dataBaseAsync.execute(sql, [id, groupId]);
    return results[0][0];
}

module.exports.getPosts = async (req, res, next) => {
    let sql = `SELECT p.*, GROUP_CONCAT(lp.user_id) AS liked_by 
        FROM \`post\` p
        LEFT JOIN \`like_post\` lp ON lp.post_id = p.id
        WHERE group_id = ?
        GROUP BY id`;
    if (req.query.order === 'desc') {
        sql = sql + ' ORDER BY id DESC';
    }
    const results = await dataBaseAsync.execute(sql, [req.params.group_id])
        .catch(() => res.status(500).json());
    const posts = results[0] ?? [];
    
    const mappedPost = posts.map(post => {
        const liked_users = post.liked_by?.split(',') ?? [];
        const postToReturn = {
            ...post,
            like_count: liked_users.length,
            connected_user_has_liked: liked_users.includes(req.connectedUser.id.toString())
        }
        delete postToReturn.liked_by;
        return postToReturn;
    });

    res.status(200).json(mappedPost);
};

module.exports.getPost = async (req, res, next) => {
    const post = await queryOnePost(req.params.id, req.params.group_id);
    res.status(200).json(post);
};

module.exports.createPost = async (req, res, next) => {
    //@TODO Gérer les paramètres manquants
    let imageUrl = null;
    if (req.file) {
        imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }
    const sql = 'INSERT INTO `post` (created_by, group_id, title, image_url, body) VALUES (?,?,?,?,?)';
    const result = await dataBaseAsync.execute(sql, [req.connectedUser.id, req.params.group_id, req.body.title, imageUrl, req.body.body])
    const insertedId = result[0].insertId;
    const createdPost = await queryOnePost(insertedId, req.params.group_id);
    return res.status(201).json(createdPost);
};

module.exports.updatePost = async (req, res, next) => {
    const isAdmin = req.connectedUser.is_admin === 1;
    const post = await queryOnePost(req.params.id, req.params.group_id);
    const isOwner = req.connectedUser.id === post?.created_by;
    const canUpdate = isAdmin || isOwner;
    if (!canUpdate) {
        return res.status(403).json();
    }
    const sqlUpdate = `UPDATE post SET :fieldsToUpdate WHERE id = ? AND group_id = ?`;
    const sqlToUpdateParts = [];
    const sqlValues = [];
    const body = req.body;
    
    if (req.file) {
        const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        sqlToUpdateParts.push(`image_url = '${imageUrl}'`);
    }
    await asyncForEach(Object.keys(body), async (key) => {
        // Les champs qu'on ne doit pas pouvoir mettre à jour
        const ignoredFields = ['id', 'group_id', 'created_by', 'created_at', 'updated_at', 'file'];
        if (ignoredFields.includes(key)) {
            // Si c'est un champs ignoré on retourne
            return;
        }
        // On récupère la valeur de la clé
        const value = body[key];
        // On l'ajoute à la variable sqlToUpdateParts
        sqlToUpdateParts.push(`${key} = ?`);
        sqlValues.push(value);
    });
    // On transforme le tableau sqlToUpdateParts en une string
    const sqlToUpdate = sqlToUpdateParts.join(', ');
    // On remplace le texte :fieldsToUpdate par la string généré juste avant
    const sqlToExecute = sqlUpdate.replace(':fieldsToUpdate', sqlToUpdate);

    await dataBaseAsync.execute(sqlToExecute, [ ...sqlValues, req.params.id, req.params.group_id])
        .catch ((e) => res.status(500).json(e));

    const postUpdated = await queryOnePost(req.params.id, req.params.group_id);
    res.status(200).json(postUpdated);
};

module.exports.deletePost = async (req, res, next) => {
    const isAdmin = req.connectedUser.is_admin === 1;
    const post = await queryOnePost(req.params.id, req.params.group_id);
    const isOwner = req.connectedUser.id === post?.created_by;
    console.log(req.connectedUser.id, post?.created_by);
    const canDelete = isAdmin || isOwner;
    if (!canDelete) {
        return res.status(403).json();
    }

    const sql = 'DELETE FROM `post` WHERE id = ? AND group_id = ?';
    await dataBaseAsync.execute(sql, [req.params.id, req.params.group_id])
        .catch (() => res.status(500).json());
    return res.status(200).json();
};



module.exports.likePost = async (req, res, next) => {
    const post = await queryOnePost(req.params.id, req.params.group_id);
    if (!post) {
        res.status(404).json('Ce post n\'existe pas ou plus');
    }

    const sql = 'INSERT INTO `like_post` (post_id, user_id) VALUES (?,?)';
    await dataBaseAsync.execute(sql, [req.params.id, req.connectedUser.id])
        .catch((e) => {
            if (e.code === 'ER_DUP_ENTRY') {
                res.status(403).json('Vous ne pouvez pas Like 2 fois le même post');
            }
            res.status(500).json()
        });
    return res.status(200).json();
};

module.exports.unlikePost = async (req, res, next) => {
    const sql = 'DELETE FROM `like_post` WHERE user_id = ? AND post_id = ?';
    const results = await dataBaseAsync.execute(sql, [req.connectedUser.id, req.params.id])
        .catch (() => res.status(500).json());
    if (results[0].affectedRows === 0) {
        res.status(403).json('Vous ne pouvez pas retirer de Like sur ce Post');
    }
    return res.status(200).json();
};