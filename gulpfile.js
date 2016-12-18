var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
//sass

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString())

  this.emit('end')
}

//sass
gulp.task('sass', function() {
	return gulp.src('./src/css/**/*.sass')
		.pipe(sass({
			errLogToConsole: false,
			onError: function (err) {
				notify().write({
					title: 'Gulp: CSS',
					message: 'Error'
				})
			}
		}))
		.on('error', swallowError)
		.pipe(gulp.dest('./css'))
		.pipe(livereload());
});

//html
gulp.task('html', function() {
	gulp.src('./**/*.html')
		.pipe(livereload());
});


// watch change
gulp.task('watch',['sass'], function() {
	gulp.watch('./src/css/**/*.sass', ['sass']);
	gulp.watch('./**/*.html', ['html']);

	livereload.listen({
		host: "localhost",
		reloadPage: "index.html"
	});
});


// exit when press ctrl+c
process.on('SIGINT', function() {
  setTimeout(function() {
    gutil.log(gutil.colors.red('Successfully closed ' + process.pid));
    process.exit(1);
  }, 500);
});