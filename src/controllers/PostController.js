const mongoose = require("mongoose");

const Post = require("../models/Post");
const Blog = require("../models/Blog");

module.exports = {
  async store(req, res) {
    const { id } = req.params;
    const { title, content, session } = req.body;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(400).json({ message: "Blog nao encontrado" });
    }

    const post = await Post.create({ title, content, session });

    blog.posts.push(post);
    blog.save();

    return res.status(200).json(post);
  },

  async show(req, res) {
    const { id } = req.params;
    const post = await Post.findById(id);

    return res.status(200).json(post);
  },

  async update(req, res) {
    const { id } = req.params;
    const post = req.body;

    mongoose.set("useFindAndModify", false);

    const updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      { $set: post },
      { new: true }
    );

    return res.status(200).json(updatedPost);
  },

  async delete(req, res) {
    const { id } = req.params;

    Post.deleteOne({ _id: id }, function(err) {
      if (err)
        return res
          .status(400)
          .json({ message: "Não foi possível deletar post." });
    });

    return res.status(200).json({ message: "Post deletado com sucesso." });
  }
};
