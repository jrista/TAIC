(function () {

	/**
	 * Created by Jon on 6/14/2015.
	 *
	 */

	angular
		.module('taic.components.controls')
		.directive('liveShow', LiveShow);

	function LiveShow() {
		return {
			restrict: 'E',
			templateUrl: '/components/controls/live-show/live-show.html',
			link: link,
			scope: {
				feedUrl: '@'
			}
		};

		function link(scope) {
			scope.videoWidth = '1720';
			scope.videoHeight = '967';

			scope.$on('$resize', function(evt, w) {
				if (w < 860) {
					scope.videoWidth = '860';
					scope.videoHeight = '483';
				} else  if (w < 1290) {
					scope.videoWidth = '860';
					scope.videoHeight = '483';
				} else if (w < 1900) {
					scope.videoWidth = '1290';
					scope.videoHeight = '725';
				} else {
					scope.videoWidth = '1720';
					scope.videoHeight = '967';
				}

			});
		}
	}
})();
