const express = require('express');
const router = express.Router();
const signController = require('../controllers/sign.controller');

router.post("/up", signController.signupUsers);
router.post("/in", signController.signinUsers);

module.exports = router;
