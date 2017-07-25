"use strict";

var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');
    // jslint = require('gulp-jslint');

gulp.task('mini-concat', function () {
    gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('mini-concat-csso', function () {
    gulp.src('assets/css/*.css')
        .pipe(csso())
        .pipe(concat('dist.css'))
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
    gulp.src('assets/images/*') // берем любые файлы в папке и ее подпапках
        .pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('dist')) // результат пишем по указанному адресу
});


gulp.task('watch',function(){
    gulp.watch('assets/js/*.js', ['main-js']);
    gulp.watch('assets/css/*.css', ['main-css']);
});

gulp.task('connect', function() {
    connect.server({
        // root:'dist',
        livereload: true
    });
});


gulp.task('main-js', function() {
    gulp.src('assets/js/*.js')
    // .pipe(jslint({
    //     vars: true,
    //     white: true,
    //     browser: true
    // }))
    // .pipe(jslint.reporter('default', true))
        .pipe(uglify())
        .pipe(concat('dist.js'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

gulp.task('main-css', function() {
    gulp.src('assets/css/*.css')
    // .pipe(jslint({
    //     vars: true,
    //     white: true,
    //     browser: true
    // }))
    // .pipe(jslint.reporter('default', true))
        .pipe(csso())
        .pipe(concat('dist.css'))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});


gulp.task('default', ['watch', 'connect']);