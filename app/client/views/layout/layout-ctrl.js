(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.views.layout', [])
		.controller('layoutCtrl', LayoutCtrl);

	function LayoutCtrl(currentIOTWWinner, mainMenu) {
		var vm = this;

		vm.currentIOTWWinner = currentIOTWWinner;
		vm.mainMenu = mainMenu;
	}
})();
