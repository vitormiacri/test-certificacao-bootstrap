var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

gulp.task('compila-sass', function(){

	return gulp.src("./source/sass/style.scss")
			.pipe(sass({outputStyle: 'compressed'}))
			.on('error', notify.onError({title: 'Erro SASS', message: '<%= error.message %>'}))
			.pipe(gulp.dest("./dist/css"));
});

gulp.task('build-js', function(){
	return gulp.src([
		'./source/componets/jquery/dist/jquery.js',
		'./source/components/tether/dist/js/tether.min.js',
		'./source/components/bootstrap/dist/js/bootstrap.min.js',
		'./source/componets/jquery-mobile/jquery.mobile.custom.js'
		])
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('move-fonts', function(){
	return gulp.src("./source/components/components-font-awesome/fonts/**")
			.pipe(gulp.dest("./dist/fonts"));
});

gulp.task('move-js', function(){
	return gulp.src('./source/js/*.js')
			.pipe(gulp.dest('./dist/js/'));
});

gulp.task("watch-files", function (){
	gulp.watch("./source/sass/**/*.scss", ['compila-sass']);
	gulp.watch("./source/js/**/*.js", ['move-js']);

});

gulp.task('default', ['build-js', 'move-fonts', 'compila-sass', 'move-js', 'watch-files']);
