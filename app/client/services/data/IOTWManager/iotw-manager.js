(function () {
	"use strict";

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.services.data')
		.service('iotwManager', IOTWManager);

	function IOTWManager() {
		var svc = this;

		// Public interface
		this.getCurrentWinner = getCurrentWinner;

		// Public interface implementation
		function getCurrentWinner() {
			// TODO: Change this to return real data rather than hard coded dummy data
			return {
				winnerName: "Eric Coles",
				imageTitle: "M82",
				dateWon: "2015-05-03"
			};
		}

		// Internal helper functions
	}
})();
