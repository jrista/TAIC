(function () {
	"use strict";

	/**
	 * Created by Jon on 7/09/2015.
	 *
	 */

	angular
		.module('taic.views.pages.routes', [])
		.config(PagesRoutes);

	/* ngInject */
	function PagesRoutes($stateProvider) {
		$stateProvider
			.state('taic.pages', {
				url: '/pages/*path',
				templateUrl: '/views/pages/pages.html',
				controller: 'pagesCtrl',
				controllerAs: 'vm',
				resolve: {
					page: ['$stateParams', 'pagesManager', function($stateParams, pagesManager) {
						var path = "/pages/" + $stateParams.path;
						var page = pagesManager.getPage(path);
						return page;
					}]
				}
			});
	}


})();
