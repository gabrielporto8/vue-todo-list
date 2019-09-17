const { Schema, model } = require('mongoose');

const TodoItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    doing: {
      type: Boolean,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    showCommentary: {
      type: Boolean,
      required: true
    },
    commentaries: {
      type: Array,
      required: true
    } 
  }, {
    timestamps: true
});

module.exports = model('TodoItem', TodoItemSchema);