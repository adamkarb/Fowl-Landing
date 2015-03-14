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
    })
      .state('geo', {
        url: '/geo',
        templateUrl: 'app/maps/map.html',
        controller: 'mapCtrl',
        controllerAs: 'map'
    });

          
    $urlRouterProvider.otherwise('/');
  })
;



