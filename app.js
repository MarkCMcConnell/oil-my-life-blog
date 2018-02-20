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
    dotenv = require('dotenv'),
    sanitizeHTML = require('sanitize-html'),
    helmet = require('helmet'),
    ratelimit = require('express-rate-limit'),
    PORT = 3000,

    Post = require('./models/post'),
    Comment = require('./models/comment'),
    User = require('./models/user');

var postsRoutes = require('./routes/posts'),
    commentsRoutes = require('./routes/comments'),
    tagsRoutes = require('./routes/tags'),
    indexRoutes = require('./routes/index');

var dbUrl = 'mongodb://' + process.env.MLABLOGIN + ':' + process.env.MLABPASSWORD + '@ds053156.mlab.com:53156/oil-my-life-blog',
    localDb = 'mongodb://localhost/oil_my_life_blog';

// Database connection
mongoose.connect(dbUrl, {useMongoClient: true});
mongoose.Promise = global.Promise;

// General settings
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname +'/public')); // Allow access to assets
app.use(methodOverride('_method'));
app.use(flash());

// Security settings
app.use(helmet({
  frameguard: {action: 'deny'}
}));
  // express-rate-limiter settings
app.enable('trust proxy');

var limiter = new ratelimit({
  windowMS: 10*60*1000, // 10 minute window
  max: 100,  // Each IP has max of 100 requests per windowMS
  delayMS: 0  // Disable delaying until rate limit is reached
});

app.use(limiter);

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

app.listen(PORT, process.env.IP, function() {
  console.log('Server started.');
});
