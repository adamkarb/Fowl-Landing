'use strict';

angular.module('waterfowlGulpAngular')
    

  
    
//This library requires scope. Get with the times
.controller('gMap', function ($scope, uiGmapGoogleMapApi, $firebaseArray, $firebaseObject) {
    console.log('gMap controller works');
    
    $scope.map = {
        center: {
            latitude: 38.2, 
            longitude: -98.5795
        },
        zoom: 4
    };
    
    var mapPins = new Firebase('https://fowl-landing.firebaseio.com/pins');
    
    $scope.userInput = '';
    
    $scope.markers = [];
    
    
    $scope.events = {
        click: function (map, eventName, handlerArgs) {
            if ($scope.userInput == '' || $scope.userInput == undefined) {
                    console.log($scope.userInput)
                    return alert("Please fill out a form before placing a marker");
                }
            $scope.$apply(function() {
                //console.log($scope.markers)
                //console.log(handlerArgs)
                
                $scope.markers.push({
                    id: $scope.markers.length,
                    latitude: handlerArgs[0].latLng.lat(),
                    longitude: handlerArgs[0].latLng.lng(),
                    showWindow: true,
                    title: $scope.userInput,
                    options: {
                        animation: api.Animation.DROP,
                        title: handlerArgs[0].latLng.toUrlValue(),
                        disableAutoPan: true
                    }
                });
               return $scope.userInput = '';
            });
        }
    };

    var api;
    uiGmapGoogleMapApi.then(function(googleMaps) {
        api = googleMaps;
    });
    
    

    

});