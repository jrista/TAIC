var apiHost = 'http://localhost:8789/';

var config = {
	common: require('./config-admin-common.js'),
	webserver: {
		host: 'dev.theastroimagingchannel.com',
		port: 8788,
		proxies: [
			{source: '/api', target: apiHost.concat('/api')}
		]
	}
};

module.exports = config;