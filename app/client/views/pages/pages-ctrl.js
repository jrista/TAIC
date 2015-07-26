(function () {

	/**
	 * Created by Jon on 7/09/2015.
	 *
	 */

	angular
		.module('taic.views.pages', [
			'taic.views.pages.routes'
		])
		.controller('pagesCtrl', PagesCtrl);

	function PagesCtrl(page) {
		var vm = this;

		vm.page = page;

		function activate() {

		}

		activate();
	}
})();
