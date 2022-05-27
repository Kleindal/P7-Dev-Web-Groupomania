const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const auth = require('../middleware/auth');

router.get("/", auth, postController.getPosts);

module.exports = router;

