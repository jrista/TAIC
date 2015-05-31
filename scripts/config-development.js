var apiHost = 'http://localhost:8789/';

var config = {
    common: require('./config-common.js'),
    webserver: {
        host: 'dev.theastroimagingchannel.com',
        port: 8787,
        proxies: [
            { source: '/api', target: apiHost.concat('/api') }
        ]
    }
};

module.exports = config;