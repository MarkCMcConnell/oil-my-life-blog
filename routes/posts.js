var express = require('express'),
    router = express.Router(),
    Post = require('../models/post');

// Posts INDEX
router.get('/', function(req, res) {
  Post.find({}, function(err, allPosts) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('posts/index', {posts: allPosts});
    }
  });
});

// Posts CREATE
router.post('/', isLoggedIn, isAdmin, function(req, res) {
  var title = req.body.title;
  var image = req.body.image;
  var content = req.body.content;
  var newPost = {title: title, image: image, content: content};

  Post.create(newPost, function(err, newPost) {
    if (err) {
      console.log(err.toString());
    } else {
      console.log(newPost);
    }
  });
  res.redirect('/posts');
});

// Posts NEW
router.get('/new', isLoggedIn, isAdmin, function(req, res) {
  res.render('posts/new');
});

// Posts SHOW
router.get('/:id', function(req, res) {
  Post.findById(req.params.id).populate('comments').exec(function(err, foundPost) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('posts/show', {post: foundPost});
    }
  });
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function isAdmin(req, res, next) {
  if (req.user.role == 'admin') {
    return next();
  }
  res.redirect('/posts');
}

module.exports = router;
