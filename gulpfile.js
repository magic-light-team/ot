// including plugins
var gulp = require('gulp');
let minifyCss = require("gulp-minify-css");
let concat = require("gulp-concat");
const minify = require("gulp-babel-minify");

gulp.task('css', function () {
    gulp.src([
		'./assets/css/*.css',
		'./assets/component/**/*.css',
		'./assets/*.css'
	])
	.pipe(concat('ot.min.css'))
    .pipe(minifyCss({
		optimizeBackground: false,
		optimizeBorderRadius: false,
		optimizeFilter: false,
		optimizeFont: false,
		optimizeFontWeight: false,
		optimizeOutline: false,
	}))
    .pipe(gulp.dest('./'));
});

gulp.task("js", () =>
  gulp.src([
	  "./assets/*.js",
	  "./assets/component/**/*.js",
	  "./assets/js/*.js",
	  "!./assets/js/jquery.js",
	])
	.pipe(concat('ot.min.js'))
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("./"))
);

gulp.task('default', [ 'css', 'js' ]);