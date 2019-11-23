const mongoose = require("mongoose");

const Post = require("../models/Postagem");
const Blog = require("../models/Blog");

module.exports = {
  async store(req, res) {
    const { id } = req.params;
    const { title, content, index, subsession } = req.body;

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({ message: "Blog nao encontrado" });
    }

    const post = await Post.create({ title, content, index, subsession });

    blog.posts.push(post);
    blog.save();

    return res.status(200).json(post);
  }
};
