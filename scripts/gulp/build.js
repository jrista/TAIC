var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
    del = require('del'),

    config = require('../config-' + env + '.js');

gulp.task('clean:deployment', function() {
    del.sync([config.common.filesets.deployment]);
});

gulp.task('build:dev', [
    'clean:deployment',
    'build:jade',
    'build:js',
    'build:less',
    'copy:vendor',
    'copy:assets'
]);
