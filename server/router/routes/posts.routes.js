var express = require('express');
var router = express.Router();
var model = require('../../models');
var Posts = model.posts;

/* GET Request for all Blog Posts. */
router.get('/', function(req, res, next) {
  	// get all the posts
	Posts.find({}, function(err, posts) {
	  if (err) throw err;
	  // object of all the users
	  res.send(posts);
	});
});

/* GET Request for a single Blog Post. */
router.get('/:id', function(req, res, next) {
  res.send('Here is the specified post - id:' + req.params.id);
});

/* POST Create a new blog post. */
router.post('/', function(req, res, next) {
  res.send('New Post Created :)');
});

/* PUT Edit a blog post. */
router.put('/:id', function(req, res, next) {
  res.send('BLog editing on point - id:' + req.params.id);
});

/* GET Request for all Blog Posts. */
router.delete('/:id', function(req, res, next) {
  res.send('Deleted a post :( - id:' + req.params.id);
});


module.exports = router;