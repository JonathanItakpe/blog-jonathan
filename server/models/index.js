
var mongoose = require('mongoose');
var config = require('config');
var PostModel = require('./schemas/post');

mongoose.connect(config.db_url);

var db = mongoose.connection;

// Logs that the connection has successfully been opened
db.on('error', console.error.bind(console, 'connection error:'));

// Open the connection
db.once('open', function callback () {
  console.log('Databsae Connection Successfully Opened at ' + usedDb);
});

exports.posts = PostModel;