'use strict';

angular.module('waterfowlGulpAngular')

  .controller('MainCtrl', function ($scope, $firebaseObject, $firebaseArray, $stateParams, Auth) {


    var auth = new Firebase('https://fowl-landing.firebaseio.com/users');
    $scope.userObject = $firebaseArray(auth);
    console.log($scope.userObject)

    $scope.login = Auth.fbLogin();



  });
