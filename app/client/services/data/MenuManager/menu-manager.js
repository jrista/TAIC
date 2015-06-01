(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.services.data')
		.service('menuManager', MenuManager);

	function MenuManager() {
		var svc = this;

		// Public interface
		this.getMenu = getMenu;

		// Public interface implementation
		function getMenu() {
			// TODO: Change this to return real data rather than hard coded dummy data
			return [
				{
					name: "Home",
					route: "taic.home",
					routeType: "sref"
				}, {
					name: "About Us",
					route: "taic.about",
					routeType: "sref"
				}, {
					name: "Contact",
					route: "taic.contact",
					routeType: "sref"
				}, {
					name: "IOTW",
					route: "taic.gallery({type: 'iotw'})",
					routeType: "sref"
				}, {
					name: "Links",
					route: "taic.links",
					routeType: "sref"
				}, {
					name: "Videos",
					route: "taic.gallery({type: 'videos'})",
					routeType: "sref"
				}
			];
		}

		// Internal helper functions
	}
})();
