var gulp = require('gulp');
//var pug = require('gulp-pug');
//var less = require('gulp-less');
var minifyCSS = require('gulp-csso');
//var concat = require('gulp-concat');
//var sourcemaps = require('gulp-sourcemaps');

// gulp.task('html', function(){
//     return gulp.src('client/templates/*.pug')
//       .pipe(pug())
//       .pipe(gulp.dest('build/html'))
//   });

gulp.task('css', function () {
  return gulp.src(['assets/css/*.css','assets/component/**/*.css'])
    .pipe(minifyCSS())
    .pipe(gulp.dest('ot.css'))
});

gulp.task('js', function () {
  return gulp.src(['assets/js/*.js'])
    //.pipe(sourcemaps.init())
    // .pipe(concat('app.min.js'))
    // .pipe(sourcemaps.write())
    //.pipe(minifyJS())
    .pipe(gulp.dest('ot.js'))
});

//  gulp.task('default', [ 'html', 'css', 'js' ]);
gulp.task('default', ['css', 'js']);