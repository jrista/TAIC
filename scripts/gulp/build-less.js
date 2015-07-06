var env = process.env.NODE_ENV || 'development';

var AutoPrefix = require('less-plugin-autoprefix');

var gulp = require('gulp'),
		print = require('gulp-print'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    minify = require('gulp-minify-css'),
		concat = require('gulp-concat'),

		merge = require('ordered-merge-stream'),

    config = require('../config-' + env + '.js');

var autoprefix = new AutoPrefix({
    browsers: ['last 2 versions']
});

gulp.task('build:less', function() {
    var main = gulp.src(config.common.filesets.lessMain);
    var lessOverrides = gulp.src(config.common.filesets.less);
    var mainOverrides = gulp.src(config.common.filesets.lessOverride);


    var action = merge([main, lessOverrides, mainOverrides])
				//.pipe(print())
        .pipe(plumber())
        .pipe(less({
            plugins: [ autoprefix ]
        }))
        .pipe(concat('taic.css'))
        //.pipe(minify())
        .pipe(gulp.dest(config.common.paths.wwwroot));

    return action;
});
