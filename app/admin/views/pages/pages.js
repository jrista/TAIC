(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.pages', [
			'taic.admin.views.pages.routes',

			'taic.admin.views.pagesListing',
			'taic.admin.views.pagesEditor'
		])
		.controller('pagesCtrl', PagesCtrl);

	function PagesCtrl() {
		var vm = this;

		function activate() {
		}

		activate();
	}
})();
