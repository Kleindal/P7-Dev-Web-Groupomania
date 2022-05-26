const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');

router.get("/", auth, userController.getUsers);
router.get("/:id", auth, userController.getUser);
router.patch("/:id", auth, userController.updateUser);
router.delete("/:id", auth, userController.deleteUser);

module.exports = router;
