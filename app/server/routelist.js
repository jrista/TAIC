(function () {
	var log = require('./logger');

	function RouteList() {
		var self = Object.create(RouteList);
		self.knownRoutes = [];
		return self;
	}

	RouteList.track = function(method, route) {
		var self = this;

		if (self.knownRoutes.indexOf(route) === -1) {
			log.info('  ' + method + ': ' + route);
			self.knownRoutes.push(route);
		}

		return route;
	};

	module.exports = RouteList();
})();