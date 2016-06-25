var Todo = require('../models/todo');
var _ = require('lodash');

exports.params = function(req, res, next, id) {
  Todo.findById(id)
    .populate('author')
    .exec()
    .then(function(todo) {
      if (!todo) {
        next(new Error('No todo with that id'));
      } else {
        req.todo = todo;
        next();
      }
    }, function(err) {
      next(err);
    });
};

exports.get = function(req, res, next) {
  Todo.find({})
    .populate('author')
    .exec()
    .then(function(todos){
      res.json(todos);
    }, function(err){
      next(err);
    });
};

exports.getOne = function(req, res, next) {
  var todo = req.todo;
  res.json(todo);
};

exports.put = function(req, res, next) {
  var todo = req.todo;

  var update = req.body;

  _.merge(todo, update);

  todo.save(function(err, saved) {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  })
};

exports.post = function(req, res, next) {
  var newtodo = req.body;
  Todo.create(newtodo)
    .then(function(todo) {
      res.json(todo);
    }, function(err) {
      logger.error(err);
      next(err);
    });
};

exports.delete = function(req, res, next) {
  req.todo.remove(function(err, removed) {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
