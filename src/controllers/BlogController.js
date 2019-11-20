const Blog = require("../models/Blog");

module.exports = {
  /**
   * Listar todos os blogs cadastrados
   * @param req
   * @param res
   */
  async index(req, res) {
    const blogs = await Blog.find(
      {},
      {
        _id: 1,
        title: 1,
        name: 1,
        createdAt: 1
      }
    );

    return res.status(200).json(blogs);
  },

  async show(req, res) {
    const { id } = req.params;
    const blog = await Blog.findById(id, {
      _id: 1,
      title: 1,
      name: 1,
      posts: 1
    }).populate({
      path: "posts",
      select: ["title", "content", "updatedAt"],
      options: { sort: { updatedAt: -1 } }
    });

    if (!blog) {
      return res.status(400).json({ message: "Blog nao encontrado" });
    }

    return res.status(200).json(blog);
  },

  /**
   * Cadastrar Blog
   * @param  req
   * @param  res
   */
  async store(req, res) {
    const { title, email, password, name } = req.body;

    const emailExist = await Blog.findOne({
      email
    });

    if (emailExist) {
      return res.status(400).json({
        message: "E-mail já está cadastrado"
      });
    }

    const blog = await Blog.create({
      title,
      email,
      password,
      name
    });

    return res.status(200).json(blog);
  }
};
