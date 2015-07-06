(function () {

	/**
	 * Created by Jon on 5/30/2015.
	 *
	 */

	angular
		.module('taic.views.home', [
			'taic.views.home.routes'
		])
		.controller('homeCtrl', HomeCtrl);

	function HomeCtrl($interval, currentIOTWWinner, moment) {
		var vm = this;

		vm.pendingShow = {
			img: '/asset/img/TAIC_show_pending.jpg',
			title: 'Our Anniversary Show',
			time: '2015-06-14T19:30:00',
			duration: '01:00:00',
			description: 'It\'s been a full year since our first show. It\'s crazy how much we\'ve grown despite ' +
									 'the niche our hobby occupies.\n\nAfter spending the first few shows wondering if people ' +
									 'would show up, we transitioned to just trying hard to provide as much good content as ' +
									 'possible. That will continue with some additional formats that we\'ll share in this session.' +
									 '\n\nWhereas most sessions are about making your images better, this one is about making the' +
									 'channel better. Feel free to make suggestions before, during or after.\n\n' +
									 'Also, a big thanks to all of our moderators and hosts. This is truly a group effort, ' +
									 'and everyone has contributed a lot of knowledge and time. I couldn\'t have done it ' +
									 'myself, and the moderators are always there to help. '
		};

		var day = moment().format('dddd');
		vm.isShowDay = day === 'Sunday' && moment().isBefore('2015-06-14T21:30:00', 'second');
		vm.isShowLive = moment().isAfter('2015-06-14T19:45:00', 'second') && moment().isBefore('2015-06-14T21:00:00');
		vm.isShowOver = moment().isAfter('2015-06-14T21:00:00', 'second');

		vm.showSlider = [{
				title: 'This is test 1',
				href: '/test1'
			}, {
				title: 'This is test 2',
				sref: 'taic.home'
			}];

		vm.iotwSlider = [{
				title: 'Winner 1 by So and So',
				img: '/asset/img/uploads/iotw/winners/carousel/1.jpg',
				href: '/iotw/winners/1'
			}, {
				title: 'Winner 2 by So and So',
				img: '/asset/img/uploads/iotw/winners/carousel/2.jpg',
				href: '/iotw/winners/2'
			}, {
				title: 'Winner 3 by So and So',
				img: '/asset/img/uploads/iotw/winners/carousel/3.jpg',
				href: '/iotw/winners/3'
			}, {
				title: 'Winner 4 by So and So',
				img: '/asset/img/uploads/iotw/winners/carousel/4.jpg',
				href: '/iotw/winners/4'
			}, {
				title: 'Winner 5 by So and So',
				img: '/asset/img/uploads/iotw/winners/carousel/5.jpg',
				href: '/iotw/winners/5'
			}];

		vm.currentIOTWWinner = currentIOTWWinner;

		function activate() {
			if (vm.isShowDay) {
				$interval(function () {
					vm.isShowLive = moment().isAfter('2015-06-14T19:30:00', 'second') && moment().isBefore('2015-06-14T21:00:00');
					vm.isShowOver = moment().isAfter('2015-06-14T21:00:00', 'second');
					vm.isShowDay = moment().isAfter('2015-06-14T21:30:00', 'second');
				}, 3000);
			}
		}

		activate();
	}
})();
