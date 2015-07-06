(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.components.controls')
		.directive('contentSlider', ContentSlider)
		.controller('contentSliderCtrl', ContentSliderCtrl);

	/* ngInject */
	function ContentSlider($parse) {
		return {
			restrict: 'E',
			templateUrl: '/components/controls/content-slider/content-slider.html',
			controller: 'contentSliderCtrl',
			replace: true,
			transclude: true,
			scope: {
				items: '=',
				transitionEffect: '@'
			},
			link: link
		};

		function link(scope, element, attrs) {
			// Configure scope data
			scope.current = 0;


			// Watch for changes to current item, and handle switching displayed item
			scope.$watch('current', function (newValue, oldValue) {
				console.log("Current changed: " + scope.current);
			});
		}
	}

	function ContentSliderCtrl($scope) {
		$scope.setCurrent = setCurrent;
		$scope.prevItem = prevItem;
		$scope.nextItem = nextItem;

		function setCurrent(index) {
			if (index >= 0 && index < $scope.items.length) {
				$scope.current = index;
			}
		}

		function prevItem() {
			$scope.current = $scope.current > 0 ? $scope.current - 1 : $scope.items.length - 1;
		}

		function nextItem() {
			$scope.current = $scope.current < $scope.items.length - 1 ? $scope.current + 1 : 0;
		}
	}
})();
