var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  title: {type: String,required: true },
  body: { type: String, default: "whatupwitdatass?"},
  createdAt: { type: Date, default: Date.now() }
});

var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
