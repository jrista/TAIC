(function () {
	"use strict";

	/**
	 * Created by Jon on 6/28/2015.
	 *
	 */

	angular
		.module('taic.admin.views.pagesEditor.routes', [])
		.config(PagesEditorRoutes);

	/* ngInject */
	function PagesEditorRoutes($stateProvider) {
		$stateProvider
			.state('admin.pages.editor', {
				url: '/editor?name',
				templateUrl: '/views/pages/pages-editor/pages-editor.html',
				controller: 'pagesEditorCtrl',
				controllerAs: 'vm',
				resolve: {
					page: ['pagesService', '$stateParams', function(pagesService, $stateParams) {
						if (!$stateParams.name) {
							return pagesService.create();
						} else {
							return pagesService.getByName($stateParams.name);
						}
					}],
					allPages: ['pagesService', function(pagesService) {
						return pagesService.listAll();
					}]
				}
			});
	}
})();
