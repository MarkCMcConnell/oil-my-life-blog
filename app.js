var express = require('express'),
    app = express();
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

// Database connection
mongoose.connect('mongodb://localhost/oil_my_life_blog', {useMongoClient: true});
mongoose.Promise = global.Promise;

// General settings
app.use(bodyParser.urlencoded({extended: true}));
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
app.use('/posts', postsRoutes);
app.use('/posts/:id/comments', commentsRoutes);
app.use('/tags', tagsRoutes);

app.listen(5000, process.env.IP, function() {
  console.log('Server started.');
});
