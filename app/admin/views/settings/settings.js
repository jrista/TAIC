(function () {

	/**
	 * Created by Jon on 7/25/2015.
	 *
	 */

	angular
		.module('taic.admin.views.settings', [
			'taic.admin.views.settings.routes'
		])
		.controller('settingsCtrl', SettingsCtrl);

	function SettingsCtrl(moment) {
		var vm = this;

		vm.tracker = {};

		vm.settings = {
			status: {
				enabled: true
			},
			live: {
				feedUrl: null,
				enabled: true,
				schedule: {
					dayOfWeek: 'Sun',
					timeOfDay: ''
				}
			}
		};

		var timeOfDay = moment(vm.settings.live.schedule.timeOfDay);
		vm.startTime = timeOfDay.isValid() ? timeOfDay.toDate() : moment().startOf('day').add(21, 'h').add(30, 'm').toDate();

		vm.save = function(settings) {
			if (!vm.tracker.__hasChanges) {
				return;
			}

			if (settings) {

			}
		};

		function activate() {
		}

		activate();
	}
})();
