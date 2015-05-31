var path = require('path');

var rootPath = process.env.PWD = process.cwd();

console.log(__dirname);
console.log(rootPath);

var filesets = {
    appConfig: ['app/server/public/environment-config.js'],
    assets: ['app/client/**/*.+(png|svg|jpg|jpeg|gif)'],
    templateCache: ['app/client/**/*.jade', '!app/client/index.jade', '!app/client/layout.jade', '!app/client/scripts.jade'],
    templatesMain: ['app/client/index.jade', 'app/client/layout.jade', 'app/client/scripts.jade'],
    templateIndex: ['app/client/index.jade'],
    jsMerge: ['app/client/**/*.js', '!app/client/*.js', '!app/client/**/*-spec.js'],
    jsMain: ['app/client/*.js', '!app/client/*-spec.js'],
    less: ['app/**/*.less'],
    lessMain: 'app/clent/taic.less',

    deployment: 'app/publicsite/**'
};

var paths = {
    root: rootPath,
    appSrc: path.resolve(rootPath.concat('/app/client')),
    wwwroot: path.resolve(rootPath.concat('/app/publicsite')),
    bower: {
        src: path.resolve(rootPath.concat('/bower_components')),
        dest: path.resolve(rootPath.concat('/app/publicsite/vendor'))
    }
};

console.log(paths.bower.src);
console.log(paths.bower.dest);

module.exports = {
    filesets: filesets,
    paths: paths
};