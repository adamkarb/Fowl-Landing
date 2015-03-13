'use strict';

angular.module('waterfowlGulpAngular')

.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://api.openweathermap.org/data/2.5/forecast/')
    RestangularProvider.setDefaultRequestParams({type: 'like'})
    RestangularProvider.setDefaultRequestParams({cnt: '7'})
    RestangularProvider.setDefaultRequestParams({APPID: '477a3d75817905807c66907f0ec12162'})
})

.controller('weatherCtrl', function($http, weatherFactory) {
    
    //function getCoord(){};
//    on ng-submit;
//    var self = this;
//    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=miami&type=like&cnt=7&APPID=477a3d75817905807c66907f0ec12162")
//    .success(function(data){
//        self.local = data;
//        self.city = data.city.name;
//        self.lat = data.city.coord.lat;
//        self.lon = data.city.coord.lon;
//        
//        console.log(self);
//        
//    })
//    .error(function(){
//        console.log('you suck')
//    })
    
    var self = this;
    weatherFactory.then(function(data){
        self.lat = data.city.coord.lat;
        console.log(self.lat);
    })
    
    
    
    
}) //END CONTROLLER

.factory('weatherFactory', function(Restangular){
   return Restangular.one('daily').get({q: 'jacksonville'})
    
    
    
    
    
//    var local, city, lat, lon;
//    
//    return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=miami&type=like&lat&long&cnt=7&speed&all&icon&APPID=477a3d75817905807c66907f0ec12162")
////    .success(function(data){
//        var local = data;
//        var city = data.city.name;
//        var lat = data.city.coord.lat;
//        var lon = data.city.coord.lon;
//        
//    })
//    .error(function(){
//        console.log('you suck')
//    })
    
    
})


;


// APIKEY forecast.io  `only written as numbers`= 122e62eac5a1a3d44186abef5e1cabd3

