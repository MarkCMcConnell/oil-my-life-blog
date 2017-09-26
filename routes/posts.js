var express = require('express'),
    router = express.Router(),
    middleware = require('../middleware'),
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
router.post('/', middleware.isLoggedIn, middleware.isAdmin, function(req, res) {
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
router.get('/new', middleware.isLoggedIn, middleware.isAdmin, function(req, res) {
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

// Posts EDIT
router.get('/:id/edit', middleware.checkPostOwnership, function(req, res) {
  Post.findById(req.params.id, function(err, foundPost) {
      res.render('posts/edit', {post: foundPost});
  });
});

router.put('/:id', middleware.checkPostOwnership, function(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body.post, function(err, updatedPost) {
    if(err) {
      res.redirect('back');
    } else {
      res.redirect('/posts/' + req.params.id);
    }
  });
});

// Posts DESTROY
router.delete('/:id', middleware.checkPostOwnership, function(req, res) {
  Post.findByIdAndRemove(req.params.id, function(err) {
    if(err) {
      res.redirect('/posts');
    } else {
      res.redirect('/posts');
    }
  });
});

// middleware
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}


module.exports = router;
