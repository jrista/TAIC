(function () {
	'use strict';

	var defaults = {
		NODE_ENV: 'development',
		CLIENT_PORT: 8789,
		MONGO_URI: 'localhost/TAIC',
		MONGO_USER: '',
		MONGO_PASSWORD: '',
		SESSION_EXPIRES_MIN: 30,
		IOTW_DIR: 'asset/img/uploads/iotw',
		SITE_ROOT: 'E:\\Development\\Clients\\TAIC\\Site\\TAIC\\app\\publicsite\\',
		ADMIN_ROOT: 'E:\\Development\\Clients\\TAIC\\Site\\TAIC\\app\\adminsite\\'
	};

	var env = {};

	// check the process.env for overrides
	for (var key in defaults) {
		if (process.env[key]) {
			if (typeof env[key] === 'number') {
				env[key] = parseInt(process.env[key]);
			} else if (process.env[key] === 'true') {
				env[key] = true;
			} else if (process.env[key] === 'false') {
				env[key] = false;
			} else {
				env[key] = process.env[key];
			}
		} else {
			env[key] = defaults[key];
		}
	}

	module.exports = env;
})();