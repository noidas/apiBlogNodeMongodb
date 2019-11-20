const Blog = require("../models/Blog");

module.exports = {
  async autenticacao(req, res) {
    const { email, password } = req.body;

    const blog = await Blog.findOne({ email });
    if (!blog) {
      return res.status(400).json({ message: "E-mail nao encontrado" });
    }
    if (blog.password === password) {
      return res.status(200).json(blog);
    } else {
      return res.status(401).json({
        message: "Senha invalida"
      });
    }
  }
};
