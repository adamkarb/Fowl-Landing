'use strict';

angular.module('waterfowlGulpAngular')


.controller('weatherCtrl', function($http, weatherFactory) {
        
    var self = this;
    weatherFactory.then(function(data){
        self.summary = data.data.daily.summary;
        self.daily = data.data.daily.data;
        
        console.log(data);
        console.log('list of daily conditions: ', self.daily);

    });
    
    //defines attributes of skycons
   this.iconObj = {
       color: '#eee',
       iconSize: 180
   }
    
    
}) //END CONTROLLER

.factory('weatherFactory', function($http){
   return $http.jsonp('https://api.forecast.io/forecast/122e62eac5a1a3d44186abef5e1cabd3/28.4158,-81.2989?callback=JSON_CALLBACK').success(function(data){
       console.log('Factory is working')
   })

}); //END FACTORY




