var Post = require('../models/post'),
    Comment = require('../models/comment');

var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
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
      if(err) {
        res.redirect('back');
      } else {
        if(foundPost.author.id.equals(req.user._id) || req.user.role === 'admin') {
          next();
        } else {
          res.redirect('back');
        }
      }
    });
  } else {
    res.redirect('back');
  }
}

middlewareObj.checkCommentOwnership = function(req, res, next) {
  if(req.isAuthenticated()) {
    Comment.findById(req.params.id, function(err, foundComment) {
      if(err) {
        res.redirect('back');
      } else {
        if(foundComment.author.id.equals(req.user._id) || req.user.role === 'admin') {
          next();
        } else {
          res.redirect('back');
        }
      }
    });
  } else {
    res.redirect('back');
  }
}

module.exports = middlewareObj;
