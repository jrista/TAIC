var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    annotate = require('gulp-ng-annotate'),
    templates = require('gulp-angular-templatecache'),
    jade = require('gulp-jade'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    //uglify = require('gulp-uglify'),

    merge = require('merge-stream'),

    config = require('../config-' + env + '.js');

gulp.task('build:js', [], function() {
    // Compile all Jade templates into a single AngularJS template cache
    var jsTmpls = gulp
        .src(config.common.filesets.templateCache)
        .pipe(plumber())
        .pipe(jade({pretty: true}))
        .pipe(templates('taic.tmpls.js', {
            module: 'taic.tmpls',
            root: '/',
            standalone: true
        }));

    // Aggregate all javascript files for merger, except the root application script
    var jsMerge = gulp
        .src(config.common.filesets.jsMerge);

    // Reference the root application script, as it must be concatenated last
    var jsMain = gulp
        .src(config.common.filesets.jsMain);

    // Build the gulp action to concatenate all application scripts into a single script file
    var action = merge(jsTmpls, jsMerge, jsMain)
        .pipe(annotate())
        .pipe(sourcemaps.init())
        .pipe(concat('taic.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.common.paths.wwwroot));

    return action;
});