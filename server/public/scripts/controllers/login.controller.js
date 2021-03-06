myApp.controller('LoginController', ['$http', '$location', function($http, $location) {
  console.log('LoginController loaded');
    var vm = this;

    vm.user = {
      username: '',
      password: '',
      persononename: '',
      personeonenumber: '',
      persontwoname: '',
      persontwonumber: ''
    };
    vm.message = '';

    vm.login = function() {
      console.log('here', vm.user);
      if(vm.user.username == '' || vm.user.password == '') {
        vm.message = "Please enter your username and password!";
      } else {
        console.log('sending to server...', vm.user);
        $http.post('/user', vm.user).then(function(response) {
          if(response.data.username) {
            console.log('success: ', response.data);
            // location works with SPA (ng-route)
            console.log('redirecting to user page');
            $location.path('/userHome');
          } else {
            console.log('failure: ', response);
            vm.message = "Wrong!!";
          }
        });
      }
    }

    vm.registerUser = function() {
      if(vm.user.username == '' || vm.user.password == '') {
        vm.message = "Choose a username and password!";
      } else {
        console.log('sending to server...', vm.user);
        $http.post('/register', vm.user).then(function(response) {
          console.log('success');
          swal("You have successfully registered!", "You will now be redirected to the login page. Please login.", "success")
          $location.path('/home');
        },
        function(response) {
          console.log('error');
          vm.message = "Please try again."
        });
      }
    }
}]);
