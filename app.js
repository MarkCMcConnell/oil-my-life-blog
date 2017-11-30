var express = require('express'),
    app = express(),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    methodOverride = require('method-override'),
    sanitizeHTML = require('sanitize-html'),

    Post = require('./models/post'),
    Comment = require('./models/comment'),
    User = require('./models/user');

var postsRoutes = require('./routes/posts'),
    commentsRoutes = require('./routes/comments'),
    tagsRoutes = require('./routes/tags'),
    indexRoutes = require('./routes/index');

var dbUri = 'mongodb://username:password@ds053156.mlab.com:53156/oil-my-life-blog',
    localDb = 'mongodb://localhost/oil_my_life_blog';

// Database connection
mongoose.connect(localDb, {useMongoClient: true});
mongoose.Promise = global.Promise;

// General settings
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname +'/public')); // Allow access to assets
app.use(methodOverride('_method'));
app.use(flash());

// Passport configuration
app.use(require('express-session')({
  secret: 'My two boys',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Provides currentUser to each page
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash('error');
  res.locals.success = req.flash('success');
  next();
});

app.use('/', indexRoutes);
app.use('/blog/posts', postsRoutes);
app.use('/blog/posts/:id/comments', commentsRoutes);
app.use('/blog/tags', tagsRoutes);

app.listen(5000, process.env.IP, function() {
  console.log('Server started.');
});
