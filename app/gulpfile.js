var gulp = require("gulp");
var fs = require("fs");
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
    return gulp.src('sass/app.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sass({includePaths: ['sass']}))
      .pipe(gulp.dest('../dist/assets/css'))
      .pipe(rename('app.bundle.css'))
      .pipe(minifyCSS())
      .pipe(gulp.dest('../dist/assets/css'));
});
gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', gulp.series('sass') );
});