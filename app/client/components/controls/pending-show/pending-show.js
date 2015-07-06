(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.components.controls')
		.directive('pendingShow', PendingShow)
		.controller('pendingShowCtrl', PendingShowCtrl);

	/* ngInject */
	function PendingShow() {
		return {
			restrict: 'E',
			templateUrl: '/components/controls/pending-show/pending-show.html',
			controller: 'pendingShowCtrl',
			replace: true,
			scope: {
				show: '='
			}
		};
	}

	function PendingShowCtrl($scope, $interval, localStorageService) {
		$scope.timeTillShow = "0:00:00";
		$scope.inCountdown = false;
		$scope.alarmAction = "Disable";

		$scope.toggleAlarm = toggleAlarm;

		function toggleAlarm() {
			if ($scope.alarmAction === 'Disable') {
				$scope.alarmAction = 'Enable';
			} else {
				$scope.alarmAction = 'Disable';
			}

			if (localStorageService.cookie.isSupported) {
				localStorageService.cookie.set('pendingShow.alarm', $scope.alarmAction);
			}
		}

		function countdown() {
			$scope.showTime = moment($scope.show.time).format('H:mm:ss a');
			$scope.timeTillShow = moment($scope.show.time).fromNow();
			$scope.inCountdown = moment($scope.show.time).diff(moment(), 'minutes') <= 30;
		}

		function activate() {
			if (localStorageService.cookie.isSupported) {
				$scope.alarmAction = localStorageService.cookie.get('pendingShow.alarm') || $scope.alarmAction;
			}

			$interval(countdown, 1000);
		}

		activate();
	}
})();
