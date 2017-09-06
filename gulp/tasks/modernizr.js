// Modernizr adds older browser support
var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./app/public/assets/stylesheets/**/*.css', './app/public/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts'));
});
