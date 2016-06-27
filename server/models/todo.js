var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: false},
  isComplete: {type: Boolean, default: false},
  priority: {type: String, required: true},
  //author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model('Todo', todoSchema);
