var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
	del = require('del'),

	config = require('../config-admin-' + env + '.js');

gulp.task('admin:clean:deployment', function () {
	del.sync([config.common.filesets.deployment]);
});

gulp.task('admin:build:dev', [
	'admin:clean:deployment',
	'admin:build:jade',
	'admin:build:js',
	'admin:build:less',
	'admin:copy:vendor',
	'admin:copy:assets'
]);
