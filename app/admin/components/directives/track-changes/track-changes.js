(function () {
	"use strict";

	/**
	 * Created by Jon on 7/25/2015.
	 *
	 */

	angular
		.module('taic.admin.components.directives')
		.directive('trackChanges', TrackChanges);

	/* ngInject */
	function TrackChanges($parse) {
		return {
			restrict: 'A',
			require: '^ng-model',
			//scope: {
			//	trackOn: '=',				// Object to track changes on
			//	trackProperty: '@'		// Name of property to track
			//},
			link: link
		};

		function link(scope, element, attrs, ngModel) {
			scope.trackOn = $parse(attrs.trackOn)(scope);
			scope.trackProperty = attrs.trackProperty;

			function setProp(value) {
				var obj = {};

				var parts = scope.trackProperty.split('.');
				var propName = _.last(parts);
				if (parts && parts.length) {
					obj = scope.trackOn[parts[0]];
					if (!obj) {
						obj = scope.trackOn[parts[0]] = {};
					}

					for (var i = 1; i < parts.length - 1; i++) {
						if (!obj[parts[i]]) {
							obj = obj[parts[i]] = {};
						} else {
							obj = obj[parts[i]];
						}
					}
				} else {
					obj = scope.trackOn;
				}

				obj[propName] = value;
			}

			setProp(false);
			var firstValue = ngModel.$modelValue;

			ngModel
				.$viewChangeListeners
				.push(function() {
					if (ngModel.$modelValue === firstValue) {
						setProp(false);
						return;
					}

					setProp(true);
					scope.trackOn['__hasChanges'] = true;
				});
		}
	}
})();
