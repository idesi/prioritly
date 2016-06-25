var router = require('express').Router();
var todosRouter = require('./todo');
var userRouter = require('./user')
router.use('/todos', todosRouter);
router.use('/users', userRouter);

module.exports = router;
