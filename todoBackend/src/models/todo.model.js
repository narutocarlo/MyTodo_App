const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const todoSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default:"pending",
      enum: ['pending', 'wip', 'completed'],
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
todoSchema.plugin(toJSON);
todoSchema.plugin(paginate);

const Todos = mongoose.model('Todo', todoSchema);

module.exports = Todos;
