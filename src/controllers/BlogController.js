const Blog = require("../models/Blog");
const User = require("../models/User");

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
        edescription: 1,
        name: 1,
        iduser: 1,
        createdAt: 1
      }
    );
    // const blogs = await User.aggregate([
    //   {
    //     $lookup: {
    //       from: "blogs",
    //       localField: "blogs",
    //       foreignField: "_id",
    //       as: "userdata"
    //     }
    //   },
    //   {
    //     $project: {
    //       _id: 1,
    //       name: 1,
    //       userdata: 1
    //     }
    //   }
    // ]);

    // var listagem = [];
    // blogs.map(blog => {
    //   const { userdata } = blog;

    //   userdata.map(p => {
    //     listagem.push({
    //       iduser: blog._id,
    //       name: blog.name,
    //       id: p._id,
    //       title: p.title,
    //       description: p.description,
    //       updatedAt: p.updatedAt
    //     });
    //   });
    // });

    return res.status(200).json(blogs);
  },

  async show(req, res) {
    const { id } = req.params;
    const blog = await Blog.findById(id, {
      _id: 1,
      title: 1,
      description: 1,
      name: 1,
      iduser: 1,
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
    const idUser = req.params.id;
    const { title, description, name, iduser } = req.body;

    const user = await User.findById(idUser);

    const blog = await Blog.create({
      title,
      description,
      name,
      iduser
    });

    user.blogs.push(blog);
    user.save();

    return res.status(200).json(blog);
  }
};
