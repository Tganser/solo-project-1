myApp.controller('UserController', ['$http', '$location', function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;
  console.log('checking user');

  // Upon load, check this user's session on the server
  $http.get('/user').then(function(response) {
    console.log("response ->", response);
    if(response.data.username) {
      // user has a curret session on the server
      vm.userName = response.data.username;
      vm.personOne = response.data.persononename;
      vm.phoneOne = '+1' + response.data.personeonenumber;
      vm.personTwo = response.data.persontwoname;
      vm.phoneTwo = '+1' + response.data.persontwonumber;
      console.log('Username: ', vm.userName);
      console.log('Persone One:', vm.personOne);
      console.log('Phone One: ', vm.userName);
      console.log('Person Two:', vm.personTwo);
      console.log('Phone Two: ', vm.userName);
    } else {
      // user has no session, bounce them back to the login page
      $location.path("/home");
    }
  });
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
