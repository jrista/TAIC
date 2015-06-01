(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.views.home.routes', [])
		.config(HomeRoutes);

	/* ngInject */
	function HomeRoutes($stateProvider) {
		$stateProvider
			.state('taic.home', {
				url: '/home',
				templateUrl: '/views/home/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			});
	}


})();
