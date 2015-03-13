'use strict';

angular.module('waterfowlGulpAngular')

.config(function(RestangularProvider){
    RestangularProvider.setBaseUrl('http://api.openweathermap.org/data/2.5/forecast/')
    RestangularProvider.setDefaultRequestParams({type: 'like'})
    RestangularProvider.setDefaultRequestParams({cnt: '7'})
    RestangularProvider.setDefaultRequestParams({APPID: '477a3d75817905807c66907f0ec12162'})
})

.controller('weatherCtrl', function($http, weatherFactory) {
    
    
    var self = this;
    weatherFactory.then(function(data){
        self.lat = data.city.coord.lat;
        console.log(self.lat);
        
    });
    
    
    
    
}) //END CONTROLLER

.factory('weatherFactory', function(Restangular){
   return Restangular.one('daily').get({q: 'jacksonville'})

})


; //END FACTORY


// APIKEY forecast.io  `only written as numbers`= 122e62eac5a1a3d44186abef5e1cabd3

