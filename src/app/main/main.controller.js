'use strict';

angular.module('waterfowlGulpAngular')

  .controller('MainCtrl', function ($scope, $firebaseObject, $stateParams, Auth) {
    console.log('Hello');

    $scope.login = Auth.fbLogin();



  });
