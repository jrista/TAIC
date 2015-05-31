var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
		_ = require('lodash'),
		config = require('../config-' + env + '.js');

gulp.task('watch', function() {
	gulp.watch(config.common.filesets.less, ['build:less']);
	gulp.watch(config.common.filesets.templatesMain, ['build:jade']);
	gulp.watch(config.common.filesets.templateCache, ['build:js']);
	gulp.watch(_.union(config.common.filesets.jsMerge, config.common.filesets.jsMain), ['build:js']);
});