var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    flash = require('connect-flash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local'),
    methodOverride = require('method-override'),
    Post = require('./models/post'),
    User = require('./models/user'),
    Author = require('./models/author'),
    Comment = require('.models/comment');

// Requiring routes
var postRoutes = require('./routes/posts'),
    commentRoutes = require('./routes/comments'),
    indexRoutes = require('./routes/index');

// Mongoose setup and connect mongoose and mongo together
var url = process.env.DATABASEURL || 'mongodb://localhost/oil_my_life_blog';
mongoose.connect(url, {useMongoClient: true});
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
// Allows access to stylesheet
app.use(express.static(__dirname + '/public'));
app.use(methodOVerride('_method'));
// Flash messages for errors/successes
app.use(flash());

// Passport configuration
app.use(require('express-session')({
  secret: 'get this blog done',
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Routes


var port = process.env.PORT || 3000;
app.listen(port, process.env.IP, function() {
  console.log('Server started');
});
