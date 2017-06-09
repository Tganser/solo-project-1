myApp.controller('UserController', ['UserService', '$http', '$location', function(UserService, $http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;
  console.log('checking user');

  // Upon load, check this user's session on the server
  vm.getUserInfo = function () {
    UserService.getUser().then(function (response) {
      console.log('response ->', response);
      vm.user = response;
    })
  };

  // logout function
  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  }

vm.journal = function () {
  $location.path("/journal");
}

vm.feeling = function () {
  $location.path("/feeling");
}



}]);
