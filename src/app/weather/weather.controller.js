'use strict';

angular.module('waterfowlGulpAngular')

.controller('weatherCtrl', function($http) {
    $http.get("https://api.openweathermap.org/data/2.5/weather?&APPID=477a3d75817905807c66907f0ec12162")
});