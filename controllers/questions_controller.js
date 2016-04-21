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


if(req.body.title === " "){
  res.json({sucess:false,message:'Post not created! pow'});
question.title = req.body.title;
}


if(req.body.body === " "){
  question.body =  "whatsupwiddatass?";
}else{
question.body = req.body.body;
}

console.log(question);
question.save(function(err, questions) {
    if (err) {
      return res.json(err);
    }
    res.json(questions);
  });
};



module.exports = questions;
