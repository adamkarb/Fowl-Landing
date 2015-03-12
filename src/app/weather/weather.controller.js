'use strict';

angular.module('waterfowlGulpAngular')

.controller('weatherCtrl', [ '$http', function($http) {
    
    var self = this;
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=orlando&type=like&lat&long&cnt=7&speed&all&icon&APPID=477a3d75817905807c66907f0ec12162")
    .success(function(data){
        self = data;
        return self;
        console.log(self);
        
    })
    .error(function(){
        console.log('you suck')
    })
    console.log(self);
    
}]);



//https://api.openweathermap.org/data/2.5/forecast?q=orlando&type=like&APPID=477a3d75817905807c66907f0ec12162

//Parameters: name,lat,lon,sunrise,sunset,temp,speed,all(cloud%),description,icon