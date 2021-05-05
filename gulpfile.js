var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  browserify = require('gulp-browserify'),
  sass = require('gulp-sass');

const
  src_prod_output = 'dist/',
  src_dev_output = '',
  src_scripts = 'scripts/js/*.js',
  src_styles = 'styles/sass/*.sass',
  src_main_js = 'scripts/js/mmits-script.js',
  src_main_sass = 'styles/sass/styles.sass';


gulp.task('scripts', function () {
  return gulp.src(src_main_js)
    .pipe(browserify())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(src_dev_output + 'scripts/'))
    .pipe(gulp.dest(src_prod_output + 'scripts/'));
});

gulp.task('styles', function () {
  return gulp.src(src_main_sass)
    .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(src_dev_output + 'styles/'))
    .pipe(gulp.dest(src_prod_output + 'styles/'));
});

gulp.task('watch', function () {
  gulp.watch(src_scripts, gulp.parallel('scripts'));
  gulp.watch(src_styles, gulp.parallel('styles'));
});

/*
gulp.task('webserver', function() {
  gulp.src('./index.html')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: true,
      port: 4200,
      host: 'localhost',
      //path: './index.html',
      //fallback: './index.html'
    }));
});
*/

gulp.task('default', gulp.parallel('watch'/*, 'webserver'*/));