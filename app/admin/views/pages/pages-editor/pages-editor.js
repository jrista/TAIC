(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.pagesEditor', [
			'taic.admin.views.pagesEditor.routes'
		])
		.controller('pagesEditorCtrl', PagesEditorCtrl);

	function PagesEditorCtrl($window, $state, $stateParams, changeCase, page, allPages, pagesService) {
		var vm = this;

		vm.tracker = {};

		// Public Interface
		vm.cancel = function() {
			if (vm.tracker.__hasChanges) {
				if (!$window.confirm('You have unsaved changes. Continue?')) {
					return;
				}
			}
			$state.go('admin.pages.listing');
		};

		vm.formatPath = function(name) {
			var path = '/taic/pages/' + changeCase.paramCase(name);
			return path;
		};

		vm.save = function(page) {
			if (!page.name || !page.markdown) {
				$window.alert("You must provide a name and populate the page.");
				return;
			}


			if (vm.tracker.__hasChanges) {
				if ((!$stateParams.name || ($stateParams.name !== page.name)) && _.any(allPages, {name: page.name})) {
					$window.alert("A page with this name already exists. You must choose a different name.");
					return;
				}

				page.date = moment().format('YYYY-MM-DD');

				if ($stateParams.name === page.name) {
					pagesService
						.update(page)
						.then(function () {
							$state.go('admin.pages.listing');
						}, function (err) {
							$window.alert(err.data || err.message || err);
						});
				} else {
					delete page._id;
					pagesService
						.add(page)
						.then(function () {
							$state.go('admin.pages.listing');
						}, function (err) {
							$window.alert(err.data || err.message || err);
						});
				}
			} else {
				$state.go('admin.pages.listing');
			}
		};

		// Private Helpers
		function validate(page) {
			if (page) {
				if (!page.name) return false;
				if (!page.markdown) return false;
			}

			return true;
		}

		function activate() {
			vm.page = page;
		}

		activate();
	}
})();
