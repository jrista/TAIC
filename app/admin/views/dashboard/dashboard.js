(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.admin.views.dashboard', [
			'taic.admin.views.dashboard.routes'
		])
		.controller('dashboardCtrl', DashboardCtrl);

	function DashboardCtrl(moment) {
		var vm = this;

		vm.settings = {
			status: {
				enabled: true
			},
			live: {
				feedUrl: 'https://youtu.be/Bpjk_BlbKNU',
				enabled: true,
				schedule: {
					dayOfWeek: 'Sun',
					timeOfDay: '2015-01-01T21:30:00'
				}
			}
		};

		vm.startTime = moment(vm.settings.live.schedule.timeOfDay).toDate();

		function activate() {
		}

		activate();
	}
})();
