const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/comments.controllers');

router.get("/", commentsControllers.getComments);

module.exports = router;

