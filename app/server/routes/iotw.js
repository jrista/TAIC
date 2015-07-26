(function() {
	'use strict';

	var env = require('../environment'),
			log = require('../logger'),
			bodyParser = require('body-parser');

	module.exports = function(app) {
		var rl = app.routeList;
		var iotwSvc = app.services.iotwService;

		app.get(rl.track('GET', '/api/iotw/current'), function (req, res) {
			iotwSvc
				.getLatest()
				.success(function(doc) {
					res.send(doc);
					next();
				})
				.error(function(err) {
					res.status(500).send({ error: 500, subError: 100, message: err });
					next();
				});
		});

		app.get(rl.track('GET', '/api/iotw/:title'), function (req, res) {
			iotwSvc
				.getByTitle(req.params.title)
				.success(function (doc) {
					res.send(doc);
					next();
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
					next();
				});
		});

		app.get(rl.track('GET', '/api/iotw/:date'), function (req, res) {
			iotwSvc
				.getByDate(req.params.date)
				.success(function (doc) {
					res.send(doc);
					next();
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
					next();
				});
		});

		app.get(rl.track('GET', '/api/iotw/:first/:last'), function (req, res) {
			iotwSvc
				.getByOwner(req.params.first, req.params.last)
				.success(function (doc) {
					log.debug('SUCCESS: IOTW document found for first and/or last name');
					res.send(doc);
					next();
				})
				.error(function (err) {
					log.error('ERROR: ' + err);
					res.status(500).send({error: 500, subError: 100, message: err});
					next();
				});
		});

		app.post(rl.track('POST', '/api/iotw/current'), bodyParser.json(), function(req, res) {
		});
	};
})();