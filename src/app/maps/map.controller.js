'use strict';

angular.module('waterfowlGulpAngular')
    

  
    
//This library requires scope. Get with the times
.controller('gMap', function ($scope, uiGmapGoogleMapApi) {
    console.log('gMap controller works');
    
    $scope.map = {
        center: {
            latitude: 38.2, 
            longitude: -98.5795
        },
        zoom: 5
    };
    
    $scope.userInput = {
        
    };
    
    $scope.markers = [];
    
    
    $scope.events = {
        click: function (map, eventName, handlerArgs) {
            $scope.$apply(function () {
                console.log($scope.markers)
                //console.log(handlerArgs)
                $scope.markers.push({
                    id: $scope.markers.length,
                    latitude: handlerArgs[0].latLng.lat(),
                    longitude: handlerArgs[0].latLng.lng(),
                    showWindow: true,
                    title: $scope.userInput.report,
                    options: {
                        animation: api.Animation.DROP,
                        title: handlerArgs[0].latLng.toUrlValue()
              
                    }
                });
            });
        }
    };

    var api;
    uiGmapGoogleMapApi.then(function(googleMaps) {
        api = googleMaps;
    });
    
    

    

});