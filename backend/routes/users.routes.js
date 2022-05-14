const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users.controllers');
const auth = require('../middleware/auth');

router.get("/", usersControllers.getUsers);
router.get("/profile/me", auth, usersControllers.profileUsers);
router.get("/profiles/contacts", usersControllers.profilesContacts);
router.post("/signup", usersControllers.signupUsers);
router.post("/signin", usersControllers.signinUsers);

module.exports = router;

