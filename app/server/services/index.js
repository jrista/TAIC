(function() {
	var iotwService = require('./iotw'),
			pagesService = require('./pages');

	function Services(app) {
		var self = Object.create(Services);

		self.iotwService = iotwService(app.db);
		self.pagesService = pagesService(app.db);

		return self;
	}

	module.exports = Services;
})();