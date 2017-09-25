var express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    User = require('../models/user');

router.get('/', function(req, res) {
  res.render('landing');
});

// Show register form
router.get('/register', function(req, res) {
  res.render('register');
});

// Auth logic
router.post('/register', function(req, res){
  var newUser = new User({username: req.body.username, role: 'user'});
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      console.log(err.toString());
      return res.render('register');
    }
    passport.authenticate('local')(req, res, function() {
      res.redirect('/posts');
    });
  });
});

// Login form
router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/login', passport.authenticate('local',
  {
    successRedirect: '/posts',
    failureRedirect: '/login'
  }), function(req, res) {
});

// logout reoute
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/posts');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

function isAdmin(req, res, next) {
  if (req.user.role === 'admin') {
    return next();
  }
  res.redirect('/posts');
}

module.exports = router;
