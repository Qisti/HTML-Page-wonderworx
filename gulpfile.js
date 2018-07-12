const gulp = require('gulp');
const gulpMinifyCss = require('gulp-minify-css');
const gulpConcat = require('gulp-concat');
const gulpUglify = require('gulp-uglify');
const gulpConnect = require('gulp-connect');
const gulpHtmlmin = require('gulp-htmlmin');
const image = require('gulp-image');

gulp.task('minify-css', function() {
  gulp.src('./public/assets/CSS/style.css')
    .pipe(gulpMinifyCss({
      compatibility: 'ie8'
    }))
    // .pipe(gulpConcat('style.min.css'))
    .pipe(gulp.dest('./build/public/assets/CSS/'));
});

gulp.task('minify-js', function() {
  gulp
    .src([
      './public/assets/javascripts/index.js'
    ])
    // .pipe(gulpConcat('index.min.js'))
    .pipe(gulpUglify())
    .pipe(gulp.dest('./build/public/assets/javascripts/'));
});

gulp.task('minify-html', function() {
  gulp.src('./view/index.html')
    .pipe(gulpHtmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('image', function () {
  gulp.src('./public/assets/images/*')
    .pipe(image())
    .pipe(gulp.dest('./build/public/assets/images/'));
});

gulp.task('server', function() {
  gulpConnect.server({
    root: 'build/view/',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('./public/assets/javascripts/*.js', ['minify-js']);
  gulp.watch('./public/assests/CSS/*.css', ['minify-css']);
  gulp.watch('./view/*.html', ['minify-html']);
});