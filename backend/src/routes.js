const express = require('express');
const TodoItemController = require('./controllers/TodoItemController');

const routes = express.Router();

routes.get('/todo', TodoItemController.index);
routes.post('/todo', TodoItemController.store);
routes.delete('/todo/:id', TodoItemController.delete);

module.exports = routes;