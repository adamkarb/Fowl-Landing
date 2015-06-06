angular.module('waterfowlGulpAngular')

.factory('Auth', function($firebaseObject, $state) {

  var auth = new Firebase('https://fowl-landing.firebaseio.com/users');
  var currentUser = { };

  return {
    onAuth: function(credentials){
      auth.onAuth(function(data){
        credentials(updateUser(data));
      })
    },

    fbLogin: function() {
        return auth.authWithOAuthPopup('facebook', function(error, authData){
          if (error) {
            console.log('Login Failed!', error);
          } else {
            console.log('Authenticated successfully with payload:', authData);
          }
        });
    }



}

});
