'use strict';

var env = require('./environment');
var log = require('./logger');

var express = require('express');
var bodyParser = require('body-parser');
var monk = require('monk');
var path = require('path');

var services = require('./services');

// Create database
var db = monk('localhost:27017/TAIC');

// Create web server
var app = new express();

// Configure web server
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/../publicsite'));
app.use('/admin', express.static(__dirname + '/../adminsite'));

app.use(bodyParser.json());

// Bind the routeList to the app
app.routeList = require('./routelist');

// Bind database to the app
app.db = monk(env.MONGO_URI);

// Bind services to the app
app.services = services(app);

// Request entry logging
app.use(function (req, res, next) {
	log.info('%s -> %s (%s)', req.method, req.path, req.url);
	next();
});

// Import all routes
require('./routes')(app);

//// Request exit logging
//app.use(function (req, res, next) {
//	log.info('END: %s -> %s (%s)', req.method, req.path, req.url);
//	res.end();
//});

// #### API Route Handlers (TODO: Move these to separate handler files in ./routes!)
// ## Activity API
//app.get('/api/activities', function(req,res) {
//    // TODO: Implement handler to retrieve list of activities
//    //       - Support parameters: page (number) and size (number); nextpage (code) for pagability
//    //       - Default to returning a stream of maximum (configurable) items, include nextpage metaproperty for implicit paging
//    //       - Default to sorting by date
//});
//
//app.get('/api/activities/:id', function(req,res) {
//    // TODO: Implement handler to retrieve single activity by identity
//    //       - Support expansion??
//});
//
//app.get('/api/activities/type/:type', function(req,res) {
//    // TODO: Implement handler to retrieve list of activities of specified type
//    //       - Define types for: hangout, video, blog, event
//    //       - Support same paging as root activities resource
//});
//
//app.get('/api/activities/from/:start/to/:end', function(req,res) {
//    // TODO: Implement handler to retrieve list of activities within specified date range
//    //       - Define types for: hangout, video, blog, event
//});
//
//// ## IOTW API
//app.post('/api/config/iotw/winner/update', function(req,res) {
//    // TODO: Implement handler for ITWO update
//    //       - Accept IOTW JSON document describing: winner, date of win, duration of exhibition
//    //       - Accept IOTW JSON document describing: header image crop, header logo crop
//    //       - Accept IOTW image upload containing large, full-size winning image
//    //       - Update site configuration node in database for current header and background display
//    //       - Process uploaded image for: blurred background copy, cropped header copy, cropped header logo copy
//    //       - Save processed image crops to standard locations
//});

//for (var i=0; i<app.routeList.knownRoutes.length; i++) {
//	log.info(' ** Route Defined: ' + app.routeList.knownRoutes[i]);
//}

// Admin Catchall - If no other route matches, serve up the index.html for the Admin Site
app.get('/admin*', function(req, res) {
	res.sendFile('index.html', { root: env.ADMIN_ROOT });
});

// Public Site Catchall - If no other route matches, serve up the index.html for the Public Site
app.get('/taic*', function(req, res) {
	res.sendFile('index.html', { root: env.SITE_ROOT });
});


// Application API
app.start = function() {
	app.listen(env.CLIENT_PORT);
};

app.stop = function() {
	app.db.close();
};

var livereload = require('livereload');

var reloadServer = livereload.createServer();
reloadServer.watch(env.ADMIN_ROOT);
reloadServer.watch(env.SITE_ROOT);

module.exports = app;