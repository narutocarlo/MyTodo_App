const httpStatus = require('http-status');
const { todoService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const add_todo = catchAsync(async (req, res) => {
  const todo = await todoService.createTodo(req);

  res.status(httpStatus.CREATED).send({ massage: 'Todo created successfully ' });
});

const update_todo = catchAsync(async (req, res) => {
  const todo = await todoService.update_todo(req);

  res.status(httpStatus.CREATED).send({ massage: 'Upadted successfully ' });
});

const delete_todo = catchAsync(async (req, res) => {
  const todo = await todoService.delete_todo(req);

  res.status(httpStatus.CREATED).send({ massage: 'Deleted successfully ' });
});

const get_todolist = catchAsync(async (req, res) => {
  const todo = await todoService.get_todolist(req);

  res.status(httpStatus.CREATED).send(todo);
});

const get_todoDetail = catchAsync(async (req, res) => {
  const todo = await todoService.get_todoDetail(req);

  res.status(httpStatus.CREATED).send(todo);
});

module.exports = {
  add_todo,
  update_todo,
  delete_todo,
  get_todolist,
  get_todoDetail,
};
