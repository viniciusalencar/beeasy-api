const { Router } = require('express');

const AuthMiddlware = require('./app/middlewares/AuthMiddlware');
const LoginController = require('./app/controllers/LoginController');
const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/user", AuthMiddlware, UserController.show);

routes.post("/login", LoginController.index);

module.exports = routes;