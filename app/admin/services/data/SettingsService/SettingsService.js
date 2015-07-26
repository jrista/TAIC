(function () {

	/**
	 * Created by Jon on 7/26/2015.
	 *
	 */

	angular
		.module('taic.admin.services.data')
		.factory('settingsService', SettingsService);

	function SettingsService(settingsAPI) {
		var apiScv = settingsAPI;

		// Public interface
		var svc = {
			create: create,
			get: get,
			update: update
		};

		// Public interface implementation
		function create() {
			return {
				status: {
					online: true
				},
				live: {
					feedUrl: null,
					schedule: {
						dayOfWeek: 'Sunday',
						timeOfDay: '09:00:00 ET'
					}
				}
			};
		}

		function get() {
			return apiScv.get();
		}

		function update(settings) {
			return apiScv.put(settings);
		}

		// Internal helper functions
		return svc;
	}
})();
