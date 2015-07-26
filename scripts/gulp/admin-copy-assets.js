var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),

	config = require('../config-admin-' + env + '.js');

gulp.task('admin:copy:assets', function () {
	var action = gulp
		.src(config.common.filesets.assets)
		.pipe(gulp.dest(config.common.paths.wwwroot));

	return action;
});