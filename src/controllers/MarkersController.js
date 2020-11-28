const Marker = require("../models/Markers");

module.exports = {
  /**
   * Listar todas as marcacoes cadastradas
   * @param req
   * @param res
   */
  async index(req, res) {
    const latlon = await Marker.find(
      {},
      {
        _id: 1,
        lat: 1,
        lon: 1,
        createdAt: 1
      }
    );

    return res.status(200).json(latlon);
  },

  // async show(req, res) {
  //   const { id } = req.params;
  //   const user = await User.findById(id, {
  //     _id: 1,
  //     name: 1,
  //     email: 1,
  //     blogs: 1
  //   }).populate({
  //     path: "blogs",
  //     select: ["title", "description", "updatedAt"],
  //     options: { sort: { updatedAt: -1 } }
  //   });

  //   if (!user) {
  //     return res.status(400).json({ message: "Usuário nao encontrado" });
  //   }

  //   return res.status(200).json(user);
  // },

  /**
   * Cadastrar Lat Lon
   * @param  req
   * @param  res
   */
  async store(req, res) {
    const { lat, lon } = req.body;

    const latlon = await Marker.create({
      lat,
      lon
    });

    return res.status(200).json(latlon);
  },

  async delete(req, res) {
    const { id } = req.params;

    Marker.deleteOne({ _id: id }, function(err) {
      if (err)
        return res
          .status(400)
          .json({ message: "Não foi possível deletar a marcação." });
    });

    return res.status(200).json({ message: "Marcação deletada com sucesso." });
  }
};
