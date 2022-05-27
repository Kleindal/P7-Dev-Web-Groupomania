const express = require('express');
const router = express.Router();
const groupController = require('../controllers/group.controller');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get("/", auth, groupController.getGroups);
router.get("/:id", auth, groupController.getGroup);
router.post("/", auth, groupController.createGroup);
router.patch("/:id", auth, groupController.updateGroup);
router.delete("/:id", auth, groupController.deleteGroup);

router.get("/:group_id/posts", auth, groupController.getPosts);
router.get("/:group_id/posts/:id", auth, groupController.getPost);
router.post("/:group_id/posts", auth, multer, groupController.createPost);
router.patch("/:group_id/posts/:id", auth, multer, groupController.updatePost);
router.delete("/:group_id/posts/:id", auth, groupController.deletePost);

router.post("/:group_id/posts/:id/like", auth, groupController.likePost);
router.delete("/:group_id/posts/:id/unlike", auth, groupController.unlikePost);


module.exports = router;

