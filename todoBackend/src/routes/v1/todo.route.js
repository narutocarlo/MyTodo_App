const express = require('express');
const validate = require('../../middlewares/validate');

const auth = require('../../middlewares/auth');
const { todoValidation } = require('../../validations');
const { todoController } = require('../../controllers');

const router = express.Router();

router.post('/', validate(todoValidation.add_todo),todoController.add_todo);
router.get('/',todoController.get_todolist);
router.get('/:id', validate(todoValidation.get_todo),todoController.get_todoDetail);
router.put('/:id', validate(todoValidation.update_todo),todoController.update_todo);
router.delete('/:id', validate(todoValidation.delete_todo),todoController.delete_todo);

module.exports = router;
