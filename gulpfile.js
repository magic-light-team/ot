// including plugins
var gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
const minify = require('gulp-babel-minify');

gulp.task('css', function () {
    gulp.src([
		'./assets/css/*.css',
		'./assets/component/**/*.css',
		'./assets/*.css'
	])
	.pipe(concat('ot.min.css'))
	.pipe(cleanCSS({
		compatibility: 'ie8',
		level: 0
	}))
    .pipe(gulp.dest('./'));
});

gulp.task("js", () =>
  gulp.src([
	  './assets/*.js',
	  './assets/component/**/*.js',
	  './assets/js/*.js',
	  '!./assets/js/jquery.js',
	])
	.pipe(concat('ot.min.js'))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('./'))
);

gulp.task('default', [ 'css', 'js' ]);