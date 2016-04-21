var express = require('express');
var router = express.Router();
var questions = require('../controllers/questions_controller');

router.get('/', questions.index);
router.post('/', questions.create);

module.exports = router;
