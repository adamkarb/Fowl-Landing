'use strict';

angular.module('waterfowlGulpAngular', ['ngAnimate', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .state('weather', {
        url: '/weather',
        templateUrl: 'app/weather/weather.html',
        controller: 'weatherCtrl',
        controllerAs: 'weather'
    });

          
    $urlRouterProvider.otherwise('/');
  })
;
