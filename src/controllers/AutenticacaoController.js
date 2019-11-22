const User = require("../models/User");

module.exports = {
  async autenticacao(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "E-mail nao encontrado" });
    }

    if (user.password === password) {
      return res.status(200).json(user);
    } else {
      return res.status(401).json({
        message: "Senha invalida"
      });
    }
  }
};
