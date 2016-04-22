var mongoose = require('mongoose');

var QuestionSchema = mongoose.Schema({
  title: {type: String, required: true },
  body: { type: String, default: "whatupwitdatass?"},
  voteCount:{type: Number,default:0 },
  createdAt: { type: Date, default: Date.now() }
});

QuestionSchema.methods.voteUp = function(cb){
  this.voteCount++;
  this.save(cb);
};
QuestionSchema.methods.voteDown = function(cb){
  this.voteCount--;
  this.save(cb);
};



var Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;
