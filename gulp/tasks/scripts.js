// Task for configuring processing of js files

var gulp = require('gulp'),
    webpack = require('webpack'),
    pump = require('pump');

gulp.task('scripts', ['modernizr'], function(callback) {
  // pump([
  //   gulp.src('./public/assets/scripts/App.js'),
  //   uglify(),
  //   gulp.dest('./public/dist/scripts')
  // ],
  // callback());
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
