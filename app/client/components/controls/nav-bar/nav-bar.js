(function () {

	/**
	 * Created by Jon on 5/31/2015.
	 *
	 */

	angular
		.module('taic.components.controls')
		.directive('navBar', NavBar)
		.controller('navBarCtrl', NavBarCtrl);

	function NavBar() {
		return {
			restrict: 'E',
			templateUrl: '/components/controls/nav-bar/nav-bar.html',
			controller: 'navBarCtrl',
			controllerAs: 'vm',
			bindToController: true,
			//link: link,
			//require: '',
			//transclude: true,
			replace: true,
			scope: {
				menu: '='
			}
		};

		function link() {
		}
	}

	function NavBarCtrl($state) {
		var vm = this;

		vm.$state = $state;
	}
})();
