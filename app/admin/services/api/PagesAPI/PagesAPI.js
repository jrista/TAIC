(function () {

	/**
	 * Created by Jon on 7/10/2015.
	 *
	 */

	angular
		.module('taic.admin.services.api')
		.factory('pagesAPI', PagesAPI);

	function PagesAPI($q, Restangular) {
		// Public interface
		var api = {
			getList: getList,
			getByName: getByName,
			getByPath: getByPath,
			post: post,
			put: put,
			remove: remove
		};

		// Public API implementation
		function getList() {
			return Restangular.all('pages').getList();
		}

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

		function post(page) {
			return Restangular
				.all('pages')
				.post(page);
		}

		function put(page) {
			return Restangular
				.one('pages')
				.customPUT(page);
		}

		function remove(name) {
			return Restangular
				.one('pages', name)
				.remove();
		}

		return api;
	}
})();
