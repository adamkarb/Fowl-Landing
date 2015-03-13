'use strict';

angular.module('waterfowlGulpAngular')

.controller('weatherCtrl', function($http) {
    
    //function getCoord(){};
//    on ng-submit;
    var self = this;
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=birmingham&type=like&lat&long&cnt=7&speed&all&icon&APPID=477a3d75817905807c66907f0ec12162")
    .success(function(data){
        self.local = data;
        
        
        console.log(self);
        
    })
    .error(function(){
        console.log('you suck')
    })
   
    //declare self.lat = data.local.city.coord.lat
    //declare self.lon = data.local.city.coord.lon
    //funnel ^^getCoord lat+lon results into forecast.io api call
    //for the sake of getting the real good data out;
    
});


// APIKEY forecast.io  `only written as numbers`= 122e62eac5a1a3d44186abef5e1cabd3

