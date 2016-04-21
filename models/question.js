var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  title: String,
  body: String,
  createdAt: { type: Date, default: Date.now() }
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
