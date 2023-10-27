const Joi = require('joi');

const add_todo = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    desc: Joi.string().required(),
    status: Joi.string(),
  }),
};

const update_todo = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
  body: Joi.object().keys({
    name: Joi.string(),
    desc: Joi.string(),
    status: Joi.string(),
  }),
};

const delete_todo = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
};

const get_todo = {
  params: Joi.object().keys({
    id: Joi.string(),
  }),
};

module.exports = {
  add_todo,
  update_todo,
  delete_todo,
  get_todo,
};
