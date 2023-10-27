const httpStatus = require('http-status');
const { Todo } = require('../models');

const createTodo = async (req) => {
  
  return Todo.create(req.body);
};

const update_todo = async (req) => {
  const todoId = req.params.id;
  const body = req.body;
  return Todo.findByIdAndUpdate(todoId, body);
};

const delete_todo = async (req) => {
  const todoId = req.params.id;

  return Todo.findByIdAndDelete(todoId);
};
const get_todolist = async (req) => {
  return Todo.find();
};
const get_todoDetail = async (req) => {
  const todoId = req.params.id;

  return Todo.findById(todoId);
};
module.exports = {
  createTodo,
  update_todo,
  delete_todo,
  get_todolist,
  get_todoDetail,
};
