var express = require('express'),
    app = express();
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),

    Post = require('./models/post');
    Comment = require('./models/comment');

mongoose.connect('mongodb://localhost/oil_my_life_blog', {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname +'/public')); // Allow access to assets

app.get('/', function(req, res) {
  res.render('landing');
});

// ================
// Posts Routes
// ================

// Posts INDEX
app.get('/posts', function(req, res) {
  Post.find({}, function(err, allPosts) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('posts/index', {posts: allPosts});
    }
  });
});

// Posts CREATE
app.post('/posts', function(req, res) {
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
app.get('/posts/new', function(req, res) {
  res.render('posts/new');
});

// Posts SHOW
app.get('/posts/:id', function(req, res) {
  Post.findById(req.params.id).populate('comments').exec(function(err, foundPost) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('posts/show', {post: foundPost});
    }
  });
});

// ========================
//  Comments Routes
// ========================

// NEW Route
app.get('/posts/:id/comments/new', function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      console.log(err.toString());
    } else {
      res.render('comments/new', {post: post});
    }
  });
});

// CREATE Route
app.post('/posts/:id/comments', function(req, res) {
  Post.findById(req.params.id, function(err, post) {
    if (err) {
      console.log(err.toString());
      res.redirect('/posts');
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err.toString());
        } else {
          post.comments.push(comment);
          post.save();
          res.redirect('/posts/' + post._id);
        }
      });
    }
  });
});

app.listen(5000, process.env.IP, function() {
  console.log('Server started.');
});
