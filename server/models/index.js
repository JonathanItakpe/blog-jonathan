
var mongoose = require('mongoose');
var config = require('../config');
var PostModel = require('./schemas/post');

mongoose.connect(config.db_url);

var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));

// Open the connection
db.once('open', function callback () {
  console.log('Database Connection Successfully Opened at ' + config.db_url);
});

exports.posts = PostModel;