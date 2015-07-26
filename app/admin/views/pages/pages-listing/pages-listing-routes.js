(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.pagesListing.routes', [])
		.config(PagesListingRoutes);

	/* ngInject */
	function PagesListingRoutes($stateProvider) {
		$stateProvider
			.state('admin.pages.listing', {
				url: '/listing',
				templateUrl: '/views/pages/pages-listing/pages-listing.html',
				controller: 'pagesListingCtrl',
				controllerAs: 'vm',
				resolve: {
					pages: ['pagesService', function(pagesService) {
						var listing = pagesService.listAll();
						return listing;
					}]
				}
			});
	}


})();
