'use strict';

angular.module('waterfowlGulpAngular')
    
  .controller('mapCtrl', function () {
    console.log('map controller works');
    
    
  })

  
    
    
.controller('gMap', function ($scope) {
    console.log('gMap controller works');
    
    $scope.map = {
        center: {
            latitude: 38.2, 
            longitude: -98.5795
        },
        zoom: 5
    };
    
    $scope.markers = [
        
    ];
    

});