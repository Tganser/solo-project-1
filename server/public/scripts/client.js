var myApp = angular.module('myApp',  ['ngRoute']);

/// Routes ///
myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  // get rid of 1.6.4 #!
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/home', {
      templateUrl: '/views/pages/home.html',
      controller: "LoginController as lc"
    })
    .when('/register', {
      templateUrl: '/views/pages/register.html',
      controller: "LoginController as lc"
    })
    .when('/userHome', {
      templateUrl: '/views/pages/user.html',
      controller: "UserController as uc"
    })
    .when('/journal', {
      templateUrl: '/views/pages/journal.html',
      controller: "JournalController as jc"
    })
    .when('/feeling', {
      templateUrl: '/views/pages/feeling.html',
      controller: "FeelingController as fc"
    })
    .when('/editProfile', {
      templateUrl: '/views/pages/edit.html',
      controller: "UserController as uc"
    })
    .otherwise({
      redirectTo: 'home'
    });

}]);
