(function () {
	'use strict';

	var env = require('../environment'),
			log = require('../logger'),
			bodyParser = require('body-parser');

	module.exports = function (app) {
		var rl = app.routeList;
		var pagesSvc = app.services.pagesService;

		app.get(rl.track('GET', '/api/pages'), function (req, res) {
			pagesSvc
				.getAll()
				.success(function (doc) {
					res.send(doc);
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});

		app.get(rl.track('GET', '/api/pages/:name'), function (req, res) {
			var name = req.params.name;

			pagesSvc
				.getByName(name)
				.success(function (doc) {
					res.send(doc[0]);
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});

		app.get(rl.track('GET', '/api/pages/path/:path'), function (req, res) {
			var pagePath = req.params.path.replace('-', '/');

			pagesSvc
				.getByPath(pagePath)
				.success(function (doc) {
					res.send(doc[0]);
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});

		app.post(rl.track('POST', '/api/pages'), function (req, res) {
			var page = req.body;

			pagesSvc
				.create(page)
				.success(function (doc) {
					res.send(doc[0]);
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});

		app.put(rl.track('PUT', '/api/pages'), function (req, res) {
			var page = req.body;

			pagesSvc
				.update(page)
				.success(function (doc) {
					if (doc === 0) {
						res.status(500).send({error: 500, subError: 100, message: 'Page not updated'});
					} else {
						res.send();
					}
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});

		app.delete(rl.track('DELETE', '/api/pages/:name'), function(req,res) {
			var name = req.params.name;

			pagesSvc
				.deleteByName(name)
				.success(function (count) {
					if (count === 0) {
						res.status(404).send({error: 404, subError: 100, message: 'Page not found'});
					} else {
						res.send();
					}
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});

		app.delete(rl.track('DELETE', '/api/pages/path/:path'), function (req, res) {
			var page = req.params.path;

			pagesSvc
				.deleteByPath(path)
				.success(function (count) {
					if (count === 0) {
						res.status(404).send({ error: 404, subError: 100, message: "Page not found"});
					} else {
						res.send();
					}
				})
				.error(function (err) {
					res.status(500).send({error: 500, subError: 100, message: err});
				});
		});
	};
})();