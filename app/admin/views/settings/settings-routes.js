(function () {
	"use strict";

	/**
	 * Created by Jon on 7/25/2015.
	 *
	 */

	angular
		.module('taic.admin.views.settings.routes', [])
		.config(SettingsRoutes);

	/* ngInject */
	function SettingsRoutes($stateProvider) {
		$stateProvider
			.state('admin.settings', {
				url: '/settings',
				templateUrl: '/views/settings/settings.html',
				controller: 'settingsCtrl',
				controllerAs: 'vm'
			});
	}
})();
