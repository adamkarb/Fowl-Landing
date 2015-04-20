'use strict';

angular.module('waterfowlGulpAngular', ['ngAnimate', 'ui.router', 'angular-skycons', 'leaflet-directive', 'geolocation', 'angular-loading-bar', 'firebase'])
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
        controller: 'gMap'
    })
      .state('duck', {
        url: '/duck',
        templateUrl: 'app/duck/duck.html',
        controller: 'DuckCtrl',
        controllerAs: 'duck'
    });
      

          
    $urlRouterProvider.otherwise('/');
  })
;




