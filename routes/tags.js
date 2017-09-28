var express = require('express'),
    router = express.Router(),
    Post = require('../models/post');

// Tags SHOW
router.get('/:tag', function(req, res) {
  Post.find({tags: req.params.tag}, function(err, foundPosts) {
    if(err) {
      console.log(err.toString());
    } else {
      res.render('tags/show', {tag: req.params.tag, posts: foundPosts});
    }
  });
});

module.exports = router;
