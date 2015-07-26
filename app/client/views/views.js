(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.views', [
			'taic.views.layout'
		])
		.config(TAICRoutes)
		.service('resolve_currentIOTWWinner', ResolveCurrentIOTWWinner)
		.service('resolve_mainMenuTree', ResolveMainMenuTree);

	function TAICRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('taic', {
				url: '/taic',
				templateUrl: '/views/layout/layout.html',
				controller: 'layoutCtrl',
				controllerAs: 'vm',
				abstract: true,
				resolve: {
					currentIOTWWinner: 'resolve_currentIOTWWinner',
					mainMenu: 'resolve_mainMenuTree'
				}
			});

		$urlRouterProvider
			.when('', '/taic/home')
			.when('/', '/taic/home')
			.when('/taic', '/taic/home')
			.when('/taic/', '/taic/home');
	}

	/* ngInject */
	function ResolveCurrentIOTWWinner(iotwManager) {
		return iotwManager.getCurrentWinner();
	}

	function ResolveMainMenuTree(menuManager) {
		return menuManager.getMenu();
	}
})();
