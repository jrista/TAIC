'use strict';

var express = require('express');
var mongodb = require('mongodb');
var monk = require('monk');

// Create database
var db = monk('localhost:27017/TAIC');

// Create web server
var server = new express();

// Configure web server
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

// Handle default route
server.get('/', function(req,res) {
    res.json('{ "status": "Not Found", "code": 404, "message": "Resource not found" }');
});

// #### API Route Handlers (TODO: Move these to separate handler files in ./routes!)
// ## Activity API
server.get('/api/activities', function(req,res) {
    // TODO: Implement handler to retrieve list of activities
    //       - Support parameters: page (number) and size (number); nextpage (code) for pagability
    //       - Default to returning a stream of maximum (configurable) items, include nextpage metaproperty for implicit paging
    //       - Default to sorting by date
});

server.get('/api/activities/:id', function(req,res) {
    // TODO: Implement handler to retrieve single activity by identity
    //       - Support expansion??
});

server.get('/api/activities/type/:type', function(req,res) {
    // TODO: Implement handler to retrieve list of activities of specified type
    //       - Define types for: hangout, video, blog, event
    //       - Support same paging as root activities resource
});

server.get('/api/activities/from/:start/to/:end', function(req,res) {
    // TODO: Implement handler to retrieve list of activities within specified date range
    //       - Define types for: hangout, video, blog, event
});

// ## IOTW API
server.post('/api/config/iotw/winner/update', function(req,res) {
    // TODO: Implement handler for ITWO update
    //       - Accept IOTW JSON document describing: winner, date of win, duration of exhibition
    //       - Accept IOTW JSON document describing: header image crop, header logo crop
    //       - Accept IOTW image upload containing large, full-size winning image
    //       - Update site configuration node in database for current header and background display
    //       - Process uploaded image for: blurred background copy, cropped header copy, cropped header logo copy
    //       - Save processed image crops to standard locations
});


// Start server
server.listen(8789);