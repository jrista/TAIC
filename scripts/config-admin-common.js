var path = require('path');

var rootPath = process.env.PWD = process.cwd();

var filesets = {
	appConfig: ['app/admin/public/environment-config.js'],
	assets: ['app/admin/**/*.+(png|svg|jpg|jpeg|gif)'],
	templateCache: ['app/admin/**/*.jade', '!app/admin/index.jade', '!app/admin/layout.jade', '!app/admin/scripts.jade'],
	templatesMain: ['app/admin/index.jade', 'app/admin/layout.jade', 'app/admin/scripts.jade'],
	templateIndex: ['app/admin/index.jade'],
	jsMerge: ['app/admin/**/*.js', '!app/admin/*.js', '!app/admin/**/*-spec.js'],
	jsMain: ['app/admin/*.js', '!app/admin/*-spec.js'],
	less: ['app/admin/**/*.less', 'app/admin/*.less', '!app/admin/admin-main.less', '!app/admin/admin-overrides.less'],
	lessMain: 'app/admin/admin-main.less',
	lessOverride: 'app/admin/admin-overrides.less',

	deployment: 'app/adminsite/**'
};

var paths = {
	root: rootPath,
	appSrc: path.resolve(rootPath.concat('/app/admin')),
	wwwroot: path.resolve(rootPath.concat('/app/adminsite')),
	bower: {
		src: path.resolve(rootPath.concat('/bower_components')),
		dest: path.resolve(rootPath.concat('/app/adminsite/vendor'))
	}
};

module.exports = {
	filesets: filesets,
	paths: paths
};