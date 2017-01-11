'use strict';

var gulp = require('gulp'),
	gutil = require("gulp-util"),
	styleguide = require('sc5-styleguide'),
	sass = require('gulp-sass'),
	postcss = require('gulp-postcss'),
	stylelint = require("stylelint"),
	autoprefixer = require('autoprefixer'),
	mq = require('css-mqpacker'),
	favicons = require("gulp-favicons"),
	reporter = require('postcss-reporter'),
	scss = require("postcss-scss"),
	cssnano = require("cssnano"),
	uglify = require('gulp-uglify'),
	pump = require('pump');
;

var styleguidePath = './builds/styleguide/';

gulp.task('watch', ['styleguide', 'css'], function() {
	gulp.watch(['*.scss'], ['css', 'styleguide']);
});

gulp.task('css:lint', function() {

	var plugins = [
		stylelint({}),
		reporter({
			clearMessages : true,
			throwError : false
		})
	];

	return gulp.src(
		[
			'sass/*.scss',
			// pattern to ignore specific files
			'!sass/vendor/test.scss'
		]
	).pipe(postcss(plugins, {syntax: scss}));
});

gulp.task('css:compile', function () {
	return gulp.src('sass/all.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./initial/css/'));
});

gulp.task('css:make', function() {
	var plugins = [
		autoprefixer({browsers: ['last 2 versions'], cascade: false}),
		mq,
		cssnano(),
	];
	return gulp.src('initial/css/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('builds/css'));
});

gulp.task('css', ['css:lint', 'css:compile', 'css:make']);

// Available in Gulp 4.0
/*
gulp.task('css', gulp.series('css:lint', 'css:compile', 'css:make', function(done) {
	done();
}));
*/

gulp.task('js', function(cb) {
	pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('builds/js')
    ],
    cb
  );
});

gulp.task('favicons', function () {
	return gulp.src("favicon/initial_1600px.png")
	.pipe(favicons({
		appName: "My App",
		appDescription: "This is my application",
		developerName: "Just Testing",
		developerURL: "http://www.test.com/",
		background: "#ffffff",
		path: "favicons/",
		url: "http://www.test.com",
		display: "standalone",
		orientation: "portrait",
		start_url: "/?homescreen=1",
		version: 1.0,
		logging: false,
		online: false,
		html: "favicons.html",
		pipeHTML: true,
		replace: true
	}))
	.on("error", gutil.log)
	.pipe(gulp.dest("./favicons/"));
});

gulp.task('styleguide:generate', function() {
	return gulp.src('sass/**/*.scss')
	.pipe(styleguide.generate({
		title: 'My Styleguide',
		server: true,
		rootPath: styleguidePath,
		overviewPath: 'styleguide.md',
		port: 3001
	}))
	.pipe(gulp.dest(styleguidePath));
});
 
gulp.task('styleguide:applystyles', function() {
  return gulp.src('sass/all.scss')
	.pipe(sass({
		errLogToConsole: true
	}))
	.pipe(styleguide.applyStyles())
	.pipe(gulp.dest(styleguidePath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);