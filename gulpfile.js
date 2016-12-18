var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('test-gulp', function() {
	console.log('for testing result');
});

gulp.task('sass', function() {
	return gulp.src('./src/css/ex.sass')
		.pipe(sass())
		.pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
	gulp.watch('./src/css/ex.sass', ['sass']);
});
