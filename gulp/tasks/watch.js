// This module is responsible for live reloading during development of css, js,
// and the main js file.  It automatically injects CSS on save.  Save a css file
// with no changes, if the CSS injection does not automatically refresh changes.
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    // Live reloading on file change
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    // Prevent browser-sync notification in window
    notify: false,
    server: {
      baseDir: 'app'
    }
  });

  watch('./app/app.ejs', function() {
    browserSync.reload();
  });

  watch('./app/public/assets/stylesheets/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./app/public/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  });

  gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./app/public/temp/styles/styles.css')
      .pipe(browserSync.stream());
  });

  gulp.task('scriptsRefresh', ['scripts'], function() {
    browserSync.reload();
  });
});
