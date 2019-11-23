const express = require("express");
const routes = express.Router();

const BlogController = require("./controllers/BlogController");
const AutenticacaoController = require("./controllers/AutenticacaoController");
const PostController = require("./controllers/PostController");
const UserController = require("./controllers/UserController");
const PostagemController = require("./controllers/PostagemController");

routes.get("/blog", BlogController.index);
routes.get("/blog/:id", BlogController.show);
routes.get("/post/:id", PostController.show);
routes.get("/user", UserController.index);
routes.get("/user/:id", UserController.show);

routes.post("/blog", BlogController.store);
routes.post("/autenticacao", AutenticacaoController.autenticacao);
routes.post("/blog/:id/post", PostController.store);
routes.post("/user", UserController.store);
routes.post("/user/:id/blog", BlogController.store);
// routes.post("/blog/:id/post", PostagemController.store);

routes.put("/post/:id", PostController.update);

routes.delete("/post/:id", PostController.delete);

module.exports = routes;
