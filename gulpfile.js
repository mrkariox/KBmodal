'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
	gulp.src('inc/scss/KBmodal.scss')
	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('inc/css/'));

});