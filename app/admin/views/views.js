(function () {
	"use strict";

	/**
	 * Created by Jon on 6/20/2015.
	 *
	 */

	angular
		.module('taic.admin.views', [
			'taic.admin.views.layout',

			'taic.admin.views.dashboard',
			'taic.admin.views.pages',
			'taic.admin.views.settings'
		])
		.config(TAICAdminRoutes);

	/* ngInject */
	function TAICAdminRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('admin', {
				url: '/admin',
				templateUrl: '/views/layout/layout.html',
				controller: 'layoutCtrl',
				controllerAs: 'vm',
				abstract: true,
				resolve: {
				}
			});

		$urlRouterProvider
			.when('/', '/admin/dashboard')
			.when('/admin', '/admin/dashboard')
			.when('/admin/', '/admin/dashboard');
	}
})();
