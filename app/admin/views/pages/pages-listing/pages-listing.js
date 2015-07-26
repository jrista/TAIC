(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.pagesListing', [
			'taic.admin.views.pagesListing.routes'
		])
		.controller('pagesListingCtrl', PagesListingCtrl);

	function PagesListingCtrl(pages) {
		var vm = this;

		vm.pages = pages;

		function activate() {
		}

		activate();
	}
})();
