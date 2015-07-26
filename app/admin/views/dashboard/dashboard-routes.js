(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.dashboard.routes', [])
		.config(DashboardRoutes);

	/* ngInject */
	function DashboardRoutes($stateProvider) {
		$stateProvider
			.state('admin.dashboard', {
				url: '/dashboard',
				templateUrl: '/views/dashboard/dashboard.html',
				controller: 'dashboardCtrl',
				controllerAs: 'vm'
			});
	}


})();
