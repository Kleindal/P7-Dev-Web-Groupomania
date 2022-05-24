const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group.controller');
const auth = require('../middleware/auth');

router.get("/", auth, groupController.getGroups);
router.get("/:id", auth, groupController.getGroup);
router.post("/", auth, groupController.createGroup);
router.patch("/:id", auth, groupController.updateGroup);
router.delete("/:id", auth, groupController.deleteGroup);

router.patch('/:id/join', auth, groupController.joinGroup);
router.patch('/:id/leave', auth, groupController.leaveGroup);

router.get("/:group_id/messages", auth, groupController.getMessages);
router.post("/:group_id/messages", auth, groupController.createMessage);
router.delete("/:group_id/messages/:id", auth, groupController.deleteMessage);


module.exports = router;

