(function () {
	"use strict";

	/**
	 * Created by Jon on 6/20/2015.
	 *
	 */

	angular
		.module('taic.admin', [
			'ui.router',
			'ui.bootstrap',

			'LocalStorageModule',
			'restangular',
			'markdown',
			'change-case',

			'taic.admin.tmpls',   // Generated by gulp build

			'taic.admin.services',
			'taic.admin.components',

			'taic.admin.views'
		])
		.constant('moment', moment)
		.controller('taicAdminCtrl', TAICAdminCtrl)
		.config(onConfig)
		.run(onStart);

	/* ngInject */
	function TAICAdminCtrl() {

	}

	/* ngInject */
	function onConfig($sceDelegateProvider, $locationProvider, localStorageServiceProvider, RestangularProvider, markdownConfig) {
		$locationProvider.html5Mode(true);

		localStorageServiceProvider
			.setPrefix('taic.admin');

		RestangularProvider
			.setBaseUrl('/api');

		markdownConfig.sanitize = false;

		$sceDelegateProvider.resourceUrlWhitelist(['https://www.youtube.com/embed/*', 'self']);
	}

	/* ngInject */
	function onStart($rootScope, $window) {
		angular.element($window).bind('resize', onResize)

		$rootScope.$on('$stateChangeStart', stateChangeStart);
		$rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
		$rootScope.$on('$stateChangeError', stateChangeError);

		function onResize(event) {
			$rootScope.$broadcast('$resize', $window.innerWidth, $window.innerHeight)
		}

		function stateChangeStart(event, toState) {
			console.log(toState.name + ': Start');
		}

		function stateChangeSuccess(event, toState) {
			console.log(toState.name + ': Success');
		}

		function stateChangeError(event, toState, params, fromState, unk, error) {
			var msg = toState.name + ': Failed';
			if (params) {
				msg += '; Parameters: ';
				_.each(params, function(n, key) {
					msg += '[' + key + '=' + params[key] + '] '
				});
			}
			if (error) {
				msg += '; Error: ' + error.message;
			}

			console.log(msg);
		}
	}
})();
