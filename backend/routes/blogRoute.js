const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const {
  createPost,
  getAllPosts,
  deletePost,
} = require("../controllers/blogController");

router.post("/", protect, createPost);
router.get("/", getAllPosts);
router.delete("/:id", deletePost);

module.exports = router;
