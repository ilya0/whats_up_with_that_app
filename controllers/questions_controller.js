var Question = require('../models/question');
var questions = {}

questions.index = function(req, res) {
  Question.find({}, function(err, questions) {
    if (err) return res.json(err);
    res.json(questions);
  });
}

module.exports = questions;
