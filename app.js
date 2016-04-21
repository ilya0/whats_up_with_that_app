var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var questionsRoute = require('./routes/questions_router');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.use('/api/questions', questionsRoute);

app.listen(port, function(){
  console.log('Listening on port ' + port);
});
