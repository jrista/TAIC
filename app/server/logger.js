(function() {
	var bunyan = require('bunyan');
	var env = require('./environment');
	var PrettyStream = require('bunyan-prettystream');

	var loggerOptions = {
		name: 'taic'
	};

	if (env.NODE_ENV === 'development') {
		var prettyStdOut = new PrettyStream();
		prettyStdOut.pipe(process.stdout);
		loggerOptions.streams = [{
			level: 'debug',
			type: 'raw',
			stream: prettyStdOut
		}];
	}

	var log = bunyan.createLogger(loggerOptions);

	var logger = {};
	logger.info = log.info.bind(log);
	logger.warn = log.warn.bind(log);
	logger.error = log.error.bind(log);

	module.exports = logger;
})();
