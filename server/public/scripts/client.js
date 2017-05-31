var myApp = angular.module('myApp',  ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // get rid of 1.6.4 #!
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/home', {
      templateUrl: '/views/pages/home.html',
      controller: "LoginController as lc"
    })
    .when('/register', {
      templateUrl: '/views/pages/register.html',
      controller: "LoginController as lc"
    })
    .when('/registertwo', {
      templateUrl: '/views/registerparttwo.html',
      controller: "LoginController as lc"
    })
    .when('/user', {
      templateUrl: '/views/pages/user.html',
      controller: "UserController as uc"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);

// myApp.controller('FirstController', function ($http) {
//   var vm = this;
//
// console.log('in controller');

//   vm.sendText = function ({
//     $http({
//       method: 'POST',
//       url: '/test'
//   });
// }); // end sendText

// vm.selectFeeling = function ({
//    console.log('in selectFeeling');
//
// }); // end selectFeeling

// }); // end controller
