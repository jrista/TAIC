(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.pages.routes', [])
		.config(PagesRoutes);

	/* ngInject */
	function PagesRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('admin.pages', {
				abstract: true,
				url: '/pages',
				templateUrl: '/views/pages/pages.html',
				controller: 'pagesCtrl',
				controllerAs: 'vm'
			});

			$urlRouterProvider
				.when('/admin/pages', '/admin/pages/listing');
	}
})();
