const TodoItem = require('../models/TodoItem');

module.exports = {
    async index(req, res) {
        const listTodoItems = await TodoItem.find({});
        
        return res.json(listTodoItems.toArray());
    },

    async store(req, res) {
        const { title, completed } = req.body;

        const newTodoItem = await TodoItem.create({
            title,
            completed
        });

        return res.status(201).json(newTodoItem);
    },

    async delete(req, res) {
        const { id } = req.body;

        const deletedTodoItem = await TodoItem.findByIdAndRemove({id});

        return res.json(deletedTodoItem);
    }
};