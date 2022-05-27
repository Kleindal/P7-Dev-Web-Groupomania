const { dataBaseAsync} = require('../bd-config/database');

module.exports.getPosts = async (req, res, next) => {
    let sql = 'SELECT * FROM `post`';
    if (req.query.created_by) {
        sql = sql + ' WHERE created_by = ' + req.query.created_by;
    }
    if (req.query.order === 'desc') {
        sql = sql + ' ORDER BY id DESC';
    }
    if (req.query.limit) {
        sql = sql + ' LIMIT ' + req.query.limit;
    }
    const results = await dataBaseAsync.execute(sql)
        .catch(() => res.status(500).json());
    const posts = results[0] ?? [];
    res.status(200).json(posts);
};