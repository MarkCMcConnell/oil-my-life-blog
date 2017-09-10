// Task responsible for setting up the app to handle PostCSS
var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    mixins = require('postcss-mixins'),
    cssImport = require('postcss-import'),
    hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
  console.log('styles working');
  return gulp.src('./public/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
  // Handle errors, provide readable errors, and allow gulp watch to continue operating
  .on('error', function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./public/temp/styles'));
});
