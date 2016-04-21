var mongoose = require('mongoose');
var mongooseURL = process.env.MONGO_URL || 'mongodb://localhost/whats_up_with_that_dev';
mongoose.connect(mongooseURL);

module.exports = mongoose;

