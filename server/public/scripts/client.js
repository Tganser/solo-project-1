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
    .when('/user', {
      templateUrl: '/views/pages/user.html',
      controller: "UserController as uc"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
