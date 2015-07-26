(function () {

	/**
	 * Created by Jon on 7/10/2015.
	 *
	 */

	angular
		.module('taic.services.api')
		.factory('pagesResource', PagesResource);

	function PagesResource(Restangular) {
		// Public interface
		var api = {
			getByName: getByName,
			getByPath: getByPath
		};

		// Public API implementation
		function getByName(name, onlyIfEnabled) {
			return Restangular
				.one('pages', name)
				.customGET('', {ifEnabled: onlyIfEnabled});
		}

		function getByPath(path, onlyIfEnabled) {
			return Restangular
				.one('pages')
				.one('path', path)
				.customGET('', {ifEnabled: onlyIfEnabled});
		}

		return api;
	}
})();
