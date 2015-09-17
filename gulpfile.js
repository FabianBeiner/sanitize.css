var gulp = require('gulp');

gulp.task('default', function () {
	var autoprefixer = require('autoprefixer');
	var minifyCSS    = require('gulp-minify-css');
	var postcss      = require('gulp-postcss');
	var sass         = require('gulp-sass');
	var sourcemaps   = require('gulp-sourcemaps');
	var processors = [
		autoprefixer({browsers: ["Android >= 4.3", "Chrome >= 39", "Edge >= 12", "Firefox >= 34", "Explorer >= 9", "iOS >= 7", "Safari >= 7", "ExplorerMobile >= 10"]})
	];

	return gulp.src('sanitize.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'expanded'
		}))
		.pipe(minifyCSS({
			keepBreaks: true
		}))
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist'));
});
