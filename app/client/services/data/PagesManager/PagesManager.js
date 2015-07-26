(function () {

	/**
	 * Created by Jon on 7/19/2015.
	 *
	 */

	angular
		.module('taic.services.data')
		.service('pagesManager', PagesManager);

	function PagesManager(pagesResource) {
		var svc = this;

		this.getPage = getPage;

		function getPage(path) {
			return pagesResource
				.getByPath('/taic' + path);
		}
	}
})();
