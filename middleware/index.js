var Post = require('../models/post');
var Comment = require('../models/comment');

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'Please log in first');
  res.redirect('/login');
}

middlewareObj.isAdmin = function isAdmin(req, res, next) {
  if (req.user.role == 'admin') {
    return next();
  }
  res.redirect('back');
}


middlewareObj.checkPostOwnership = function(req, res, next) {
  if(req.isAuthenticated()) {
    Post.findById(req.params.id, function(err, foundPost) {
      console.log(foundPost.author.id);
      console.log(req.user._id);
      if(err) {
        req.flash('error', 'Post not found');
        res.redirect('back');
      } else {
        if(foundPost.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You don\'t have perimssion to do that');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You must be logged in');
    res.redirect('back');
  }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
  if(req.isAuthenticated()) {
    Comment.findById(req.params.id, function(err, foundComment) {
      if(err) {
        res.redirect('back');
      } else {
        if(foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash('error', 'You do not have permission');
          res.redirect('back');
        }
      }
    });
  } else {
    req.flash('error', 'You must be logged in');
    res.redirect('back');
  }
}

module.exports = middlewareObj;
