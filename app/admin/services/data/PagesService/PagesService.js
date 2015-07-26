(function () {

	/**
	 * Created by Jon on 7/3/2015.
	 *
	 */

	angular
		.module('taic.admin.services.data')
		.factory('pagesService', PagesService);

	function PagesService(pagesAPI) {
		var apiScv = pagesAPI;

		// Public interface
		var svc = {
			create: create,
			listAll: listAll,
			getByName: getByName,
			getByPath: getByPath,
			add: add,
			update: update,
			remove: remove,
			removeByName: removeByName
		};

		// Public interface implementation
		function create() {
			return {
				name: '',
				path: '/pages/',
				markdown: '',
				isEnabled: false,
				date: moment().format('yyyy-MM-dd')
			};
		}

		function listAll() {
			return apiScv.getList();
		}

		function getByName(name, onlyIfEnabled) {
			return apiScv.getByName(name, onlyIfEnabled);
		}

		function getByPath(path, onlyIfEnabled) {
			return apiScv.getByPath(path, onlyIfEnabled);
		}

		function add(page) {
			return apiScv.post(page);
		}

		function update(page) {
			return apiScv.put(page);
		}

		function remove(page) {
			return apiScv.remove(page.name);
		}

		function removeByName(name) {
			return apiScv.remove(name);
		}

		// Internal helper functions
		return svc;
	}
})();
