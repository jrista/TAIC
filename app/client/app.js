(function() {
    "use strict";

    /**
     * Created by Jon on 5/26/2015.
     *
     */

    angular
        .module('taic', [
            'ui.router',
            'ui.bootstrap',

            'taic.tmpls',   // Generated by gulp build

            'taic.services',
            'taic.components',

            'taic.views',
            'taic.views.home'
        ])
        .controller('taicCtrl', TAICCtrl)
        .config(onConfig)
        .run(onStart);

    /* ngInject */
    function TAICCtrl() {

    }

    /* ngInject */
    function onConfig($locationProvider) {
        $locationProvider.html5Mode(true);
    }

    /* ngInject */
    function onStart($rootScope) {
        $rootScope.$on('$stateChangeStart', stateChangeStart);
        $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
        $rootScope.$on('$stateChangeError', stateChangeError);

        function stateChangeStart(event, toState) {
            console.log(toState.name + ': Start');
        }

        function stateChangeSuccess(event, toState) {
            console.log(toState.name + ': Success');
        }

        function stateChangeError(event, toState) {
            console.log(toState.name + ': Failed');
        }
    }
})();
