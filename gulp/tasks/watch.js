// This module is responsible for live reloading during development of css, js,
// and the main js file.  It automatically injects CSS on save.  Save a css file
// with no changes, if the CSS injection does not automatically refresh changes.
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    nodemon = require('gulp-nodemon'),
    // Live reloading on file change
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    // Prevent browser-sync notification in window
    notify: false,
    proxy: 'http://localhost:3000',
    files: ['**/*.*'],
    port: 7000
  });

  watch('./public/views/**/*.ejs', function() {
    browserSync.reload();
  });

  watch('./public/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./public/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

  gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./public/dist/styles/styles.css')
      .pipe(browserSync.stream());
  });

  gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
  });
});
