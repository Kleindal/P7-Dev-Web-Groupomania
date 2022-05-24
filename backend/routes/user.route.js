const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth');

router.get("/", userController.getUsers);
router.get("/profile/me", auth, userController.profileUsers);
router.get("/profiles/contacts", auth, userController.profilesContacts);
router.put("/:id", auth, userController.updateUsers);
router.delete("/:id", auth, userController.deleteUsers);

router.get("/:id/groups", userController.getUserGroups);

module.exports = router;
