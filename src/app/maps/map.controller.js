'use strict';

angular.module('waterfowlGulpAngular')
    

  
    
//This library requires scope. Get with the times
.controller('gMap', function ($scope, leafletData, leafletEvents, $firebaseArray) {
    console.log('gMap controller works');
    
    angular.extend($scope, {
        layers: {
            baselayers: {
                googleRoadmap: {
                    name: 'Google Streets',
                    layerType: 'ROADMAP',
                    type: 'google'
                },
                googleHybrid: {
                    name: 'Google Hybrid',
                    layerType: 'HYBRID',
                    type: 'google'
                },
                osm: {
                    name: 'OpenStreetMap',
                    type: 'xyz',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    layerOptions: {
                        subdomains: ['a', 'b', 'c'],
                        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                        continuousWorld: true
                    }
                }
            }

        }, 
        center: {
            lat: 38.2,
            lng: -98.5795,
            zoom: 4
        },
         events: {
             markers: {
                enable: leafletEvents.getAvailableMarkerEvents(),
            }
         }
    });
    
    var mapPins = new Firebase('https://fowl-landing.firebaseio.com/pins');
    
    $scope.markers = $firebaseArray(mapPins);
    
    $scope.$on('leafletDirectiveMap.click', function(event, args){
        
        if ($scope.huntMessage == '' || $scope.huntMessage == undefined) {
            return alert("Please fill out a report, then add your marker!");
        };
        
        var leafEvent = args.leafletEvent.latlng;
        
        $scope.markers.$add({
            lat: leafEvent.lat,
            lng: leafEvent.lng,
            message: $scope.huntMessage
        });
        $scope.huntMessage = '';
    });
   

        
});