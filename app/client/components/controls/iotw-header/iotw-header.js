(function() {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.components.controls')
		.directive('iotwHeader', IOTWHeader);

	/* ngInject */
	function IOTWHeader() {
		return {
			restrict: 'E',
			templateUrl: '/components/controls/iotw-header/iotw-header.html',
			replace: true,
			scope: {
				winner: '='
			}
		};
	}
})();
