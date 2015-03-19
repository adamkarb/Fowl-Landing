'use strict';

angular.module('waterfowlGulpAngular')


.controller('weatherCtrl', function($http, weatherFactory, geolocation, cfpLoadingBar) {
    var self = this;
    
    
    
    
    weatherFactory.then(function(data){
        self.summary = data.data.daily.summary;
        self.daily = data.data.daily.data;
        
        //console.log(self.daily);
        //console.log('list of daily conditions: ', self.daily);

    });
    
    //defines attributes of skycons
   this.iconObj = {
       color: '#eee',
       iconSize: 180
   };
    
    
}) //END CONTROLLER

.factory('weatherFactory', function($http, geolocation, cfpLoadingBar){
    var self = this;
     
    return geolocation.getLocation().then(function(data){
        //console.log(data)
        self.coords = {
            lat: data.coords.latitude,
            lon: data.coords.longitude
        };
        console.log('lat = ', self.coords.lat);
        console.log('lon = ', self.coords.lon);
            return $http.jsonp('https://api.forecast.io/forecast/122e62eac5a1a3d44186abef5e1cabd3/'+self.coords.lat+','+self.coords.lon+'?callback=JSON_CALLBACK').success(function(data){
           console.log('Factory is working')
         });
        
     });
        
        
   
}); //END FACTORY




