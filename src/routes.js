const express = require("express");
const routes = express.Router();
const BlogController = require("./controllers/BlogController");
const AutenticacaoController = require("./controllers/AutenticacaoController");
const PostController = require("./controllers/PostController");

routes.get("/blog", BlogController.index);
routes.get("/blog/:id", BlogController.show);
routes.get("/post/:id", PostController.show);
routes.post("/blog", BlogController.store);
routes.post("/autenticacao", AutenticacaoController.autenticacao);
routes.post("/blog/:id/post", PostController.store);
routes.put("/post/:id", PostController.update);
routes.delete("/post/:id", PostController.delete);

module.exports = routes;
