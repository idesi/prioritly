var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  isComplete: {type: Boolean, default: false},
  priority: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('Todo', todoSchema);
