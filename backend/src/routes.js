const express = require('express');
const TodoItemController = require('./controllers/TodoItemController');

const routes = express.Router();

routes.get('/todoItems', TodoItemController.index);
routes.post('/todoItems', TodoItemController.store);
routes.delete('/todoItems', TodoItemController.delete);

module.exports = routes;