const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const gulp = require('gulp');

function defaultTask(cb) {
	gulp
		.src('src/styles/*.scss')
		.pipe(
			autoprefixer({
				cascade: false
			})
		)
		.pipe(gulp.dest('build'));
}

exports.default = defaultTask;
