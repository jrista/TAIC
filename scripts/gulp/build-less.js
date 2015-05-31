var env = process.env.NODE_ENV || 'development';

var AutoPrefix = require('less-plugin-autoprefix');

var gulp = require('gulp'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),

    config = require('../config-' + env + '.js');

var autoprefix = new AutoPrefix({
    browsers: ['last 2 versions']
});

gulp.task('build:less', function() {
    var action = gulp
        .src(config.common.filesets.lessMain)
        .pipe(plumber())
        .pipe(less({
            plugins: [ autoprefix ]
        }))
        .pipe(gulp.dest(config.common.paths.wwwroot));

    return action;
});
