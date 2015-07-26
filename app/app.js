var app = require('./server/server');
var env = require('./server/environment');
var log = require('./server/logger');

app.start();
log.info('Express server listening on port ' + env.CLIENT_PORT);

//if (env.NODE_ENV === 'development') {
//	var livereload = require('livereload');
//
//	var reloadServer = livereload.createServer();
//	reloadServer.watch(__dirname + '/../publicsite');
//	reloadServer.watch(__dirname + '/../adminsite');
//}