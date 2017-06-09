myApp.service('UserService', ['$http', '$location', function($http, $location) {
  var vm = this;
  console.log('in user service');
  vm.getUser = function () {
    return $http({
      method: 'GET',
      url: '/user'
    }).then(function (response) {
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
        return response.data;
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    });
  };
    // $http.get('/user').then(function(response) {
    //   console.log("response ->", response);
    //   if(response.data.username) {
    //     // user has a curret session on the server
    //     vm.userName = response.data.username;
    //     vm.personOne = response.data.persononename;
    //     vm.phoneOne = '+1' + response.data.personeonenumber;
    //     vm.personTwo = response.data.persontwoname;
    //     vm.phoneTwo = '+1' + response.data.persontwonumber;
    //     console.log('Username: ', vm.userName);
    //     console.log('Persone One:', vm.personOne);
    //     console.log('Phone One: ', vm.userName);
    //     console.log('Person Two:', vm.personTwo);
    //     console.log('Phone Two: ', vm.userName);
    //   } else {
    //     // user has no session, bounce them back to the login page
    //     $location.path("/home");
    //   }
    // });
  // };
  }]);
