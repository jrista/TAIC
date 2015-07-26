var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
	_ = require('lodash'),
	config = require('../config-admin-' + env + '.js');

gulp.task('admin:watch', function () {
	gulp.watch(config.common.filesets.less, ['admin:build:less']);
	gulp.watch(config.common.filesets.lessMain, ['admin:build:less']);
	gulp.watch(config.common.filesets.lessOverride, ['admin:build:less']);
	gulp.watch(config.common.filesets.templatesMain, ['admin:build:jade']);
	gulp.watch(config.common.filesets.templateCache, ['admin:build:js']);
	gulp.watch(_.union(config.common.filesets.jsMerge, config.common.filesets.jsMain), ['admin:build:js']);
});