const { Router } = require('express');

const UserController = require('./app/controllers/UserController');

const routes = new Router();

routes.get("/user", UserController.show);
routes.post("/user", UserController.store);

module.exports = routes;