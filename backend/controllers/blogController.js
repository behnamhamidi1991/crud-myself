const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");

// @desc     Create post
// @api     POST /api/blog
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const { title, image, content } = req.body;

  if ((!title || !image, !content)) {
    throw new Error("All fields are required");
  }

  const post = await Post.create({
    user: req.user.id,
    title: req.body.title,
    image: req.body.image,
    content: req.body.content,
  });

  res.status(201).json(post);
});

// @desc    Get all posts
// @api     GET /api/blog
// @access  Public
const getAllPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({});

  if (!posts) {
    throw new Error("There are no posts!");
  }

  res.status(200).json(posts);
});

// @desc    Delete Post
// @api     DELETE /api/blog/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findByIdAndDelete(req.params.id);

  if (!post) {
    throw new Error("Post does not exist!");
  }

  res.status(200).json(post);
});

module.exports = { createPost, getAllPosts, deletePost };
