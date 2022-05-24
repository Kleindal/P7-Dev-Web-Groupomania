const jwt = require('jsonwebtoken');
const { dataBaseAsync} = require('../bd-config/database');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    const userId = decodedToken.userId;
    
    /** @deprecated */
    req.userId = userId;

    const sql = 'SELECT * FROM user WHERE id = ?';
    const result = await dataBaseAsync.execute(sql, [userId])
      .catch(() => res.status(500).json());
    if (!result[0]) {
      res.status(401).json();
    }
    req.connectedUser = result[0][0];

    next();

  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
}
