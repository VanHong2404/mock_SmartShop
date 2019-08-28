(function () {
    'use strict';
    angular
        .module('mock_SmartShop')
        .config(stateConfig);
    stateConfig.$inject=['$stateProvider','$urlRouterProvider'];
})();
