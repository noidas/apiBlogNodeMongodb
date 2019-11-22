const User = require("../models/User");

module.exports = {
  /**
   * Listar todos os usuarios cadastrados
   * @param req
   * @param res
   */
  async index(req, res) {
    const users = await User.find(
      {},
      {
        _id: 1,
        name: 1,
        email: 1,
        createdAt: 1
      }
    );

    return res.status(200).json(users);
  },

  async show(req, res) {
    const { id } = req.params;
    const user = await User.findById(id, {
      _id: 1,
      name: 1,
      email: 1,
      blogs: 1
    }).populate({
      path: "blogs",
      select: ["title", "description", "updatedAt"],
      options: { sort: { updatedAt: -1 } }
    });

    if (!user) {
      return res.status(400).json({ message: "Usuário nao encontrado" });
    }

    return res.status(200).json(user);
  },

  /**
   * Cadastrar Blog
   * @param  req
   * @param  res
   */
  async store(req, res) {
    const { name, email, password } = req.body;

    const emailExist = await User.findOne({
      email
    });

    if (emailExist) {
      return res.status(400).json({
        message: "E-mail já está cadastrado"
      });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    return res.status(200).json(user);
  }
};
