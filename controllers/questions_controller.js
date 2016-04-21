var Question = require('../models/question');
var questions = {};

questions.index = function(req, res) {
  Question.find({}, function(err, questions) {
    if (err) return res.json(err);
    res.json(questions);
  });
};

questions.create = function(req, res) {
var question = new Question();


question.title = req.body.title;
question.body = req.body.body;


console.log(question);
question.save(function(err, questions) {
    if (err) {
      return res.json(err);
    }
    res.json(questions);
  });
};



module.exports = questions;
