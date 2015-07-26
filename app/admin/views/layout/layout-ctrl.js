(function () {

	/**
	 * Created by Jon on 6/20/2015.
	 *
	 */

	angular
		.module('taic.admin.views.layout', [])
		.controller('layoutCtrl', LayoutCtrl);

	function LayoutCtrl($state) {
		var vm = this;

		vm.isState = function(name) {
			return $state.includes(name);
		}
	}
})();
