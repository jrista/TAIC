var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
	bowerFiles = require('main-bower-files'),

	config = require('../config-admin-' + env + '.js');

gulp.task('admin:copy:vendor', function () {
	var action = gulp
		.src(bowerFiles(), {
			base: 'bower_components'
		})
		.pipe(gulp.dest(config.common.paths.bower.dest));

	return action;
});