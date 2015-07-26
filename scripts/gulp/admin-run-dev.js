var env = process.env.NODE_ENV || 'development';

var gulp = require('gulp'),
	webserver = require('gulp-webserver'),

	config = require('../config-admin-' + env + '.js');

// Configure web server
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

gulp.task('admin:run:development', ['admin:build:dev'], function () {
	var action = gulp
		.src(config.common.paths.wwwroot)
		.pipe(webserver({
			livereload: true,   // Development flag for rapid prototyping and testing

			host: config.webserver.host,
			port: config.webserver.port,

			proxies: config.webserver.proxies,

			fallback: 'index.html',
			open: true
		}));

	return action;
});