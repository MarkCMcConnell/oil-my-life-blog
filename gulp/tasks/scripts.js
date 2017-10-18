// Task for configuring processing of js files

var gulp = require('gulp'),
    // webpack = require('webpack');
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', ['modernizr'], function(callback) {
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
  // gulp.src('./public/assets/scripts/**/*.js')
  //   .pipe(uglify())
  //   .pipe(concat('bundle.js'))
  //   .pipe(gulp.dest('./public/dist/scripts'));
});

//
