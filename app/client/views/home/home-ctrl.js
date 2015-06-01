(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.views.home', [
			'taic.views.home.routes'
		])
		.controller('homeCtrl', HomeCtrl);

	function HomeCtrl(currentIOTWWinner) {
		var vm = this;

		vm.currentIOTWWinner = currentIOTWWinner;
	}
})();
