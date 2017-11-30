var express = require('express'),
    router = express.Router({mergeParams: true}),
    middleware = require('../middleware'),
    Post = require('../models/post'),
    Comment = require('../models/comment');

// NEW Route
router.get('/new', middleware.isLoggedIn, function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('blog/comments/new', {post: post});
    }
  });
});

// CREATE Route
router.post('/', middleware.isLoggedIn, function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      console.log(err.toString());
      res.redirect('blog/posts');
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
          res.redirect('blog/posts/' + post._id);
        }
      });
    }
  });
});

// EDIT Route
router.get('/:comment_id/edit', middleware.checkCommentOwnership, function(req, res) {
  Comment.findById(req.params.comment_id, function(err, foundComment) {
    if(err) {
      res.redirect('back');
    } else {
      res.render('comments/edit', {post_id: req.params.id, comment: foundComment});
    }
  });
});

// UPDATE Route
router.put('/:comment_id', middleware.checkCommentOwnership, function(req, res) {
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment) {
    if(err) {
      res.redirect('back');
    } else {
      res.redirect('blog/posts/' + req.params.id);
    }
  });
});

// DESTROY Route
router.delete('/:comment_id', middleware.checkCommentOwnership, function(req, res) {
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if(err) {
      res.redirect('back');
    } else {
      res.redirect('blog/posts/' + req.params.id);
    }
  });
});

module.exports = router;
