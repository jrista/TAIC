(function () {

	/**
	 * Created by Jon on 7/26/2015.
	 *
	 */

	angular
		.module('taic.admin.services.api')
		.factory('settingsAPI', SettingsAPI);

	function SettingsAPI(Restangular) {
		// Public interface
		var api = {
			get: get,
			put: put
		};

		// Public API implementation
		function get() {
			return Restangular.one('settings').get();
		}

		function put(settings) {
			return Restangular
				.one('settings')
				.customPUT(settings);
		}


		return api;
	}
})();
