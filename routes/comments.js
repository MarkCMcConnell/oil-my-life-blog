var express = require('express'),
    router = express.Router({mergeParams: true}),
    Post = require('../models/post'),
    Comment = require('../models/comment');

// NEW Route
router.get('/new', isLoggedIn, function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('comments/new', {post: post});
    }
  });
});

// CREATE Route
router.post('/', isLoggedIn, function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      console.log(err.toString());
      res.redirect('/posts');
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err.toString());
        } else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          post.comments.push(comment);
          post.save();
          res.redirect('/posts/' + post._id);
        }
      });
    }
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
