var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    plumber = require('gulp-plumber'),
    wiredep = require('wiredep').stream,
    config = require('../config-' + env + '.js');

gulp.task('build:jade', function () {
    var action = gulp
        .src(config.common.filesets.templateIndex)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(wiredep({
            ignorePath: '../../bower_components',
            fileTypes: {
                html: {
                    replace: {
                        js:  '<script src="vendor{{filePath}}" charset="UTF-8"></script>',
                        css: '<link rel="stylesheet" href="vendor{{filePath}}" charset="UTF-8" />'
                    }
                }
            }
        }))
        .pipe(gulp.dest(config.common.paths.wwwroot));

    return action;
});