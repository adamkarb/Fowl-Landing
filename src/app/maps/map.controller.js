'use strict';

angular.module('waterfowlGulpAngular')
    
  .controller('mapCtrl', function () {
    console.log('map controller works');
    
    
  })

  
    
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
                    title: "@Al_the_x",
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
    
    
//    $scope.markers = [
//        {
//            id: 1,  
//            latitude: "28.4158",
//            longitude: "-81.2989",
//            options: {
//                labelContent: "SwaytheDev",
//                draggable: true,
//                crossOnDrag: false
//            }
//        },
//        {
//            id: 2,
//            latitude: "29",
//            longitude: "-84"
//        }
//    ];
    

});