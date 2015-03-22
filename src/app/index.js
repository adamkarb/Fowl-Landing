'use strict';

angular.module('waterfowlGulpAngular', ['ngAnimate', 'restangular', 'ui.router', 'angular-skycons', 'uiGmapgoogle-maps', 'geolocation', 'angular-loading-bar'])
  .config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyBM2_k6sZazd3dSVqSmJCSvmyx3Wk66sdM',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    
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




