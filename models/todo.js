const Joi = require('joi');
const mongoose = require('mongoose');

const Todo = mongoose.model('Todo', new mongoose.Schema({
  dayTask: {
    type: String,
    required: true
  },
  taskTime: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false
  }
}));

exports.Todo = Todo; 
