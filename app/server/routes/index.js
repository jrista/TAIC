(function() {
	'use strict';

	var log = require('../logger');

	module.exports = function(app) {
		log.info('Adding routes');

		require('./iotw')(app);
		require('./pages')(app);
	};
})();