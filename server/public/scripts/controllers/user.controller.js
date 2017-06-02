myApp.controller('UserController', ['$http', '$location', function($http, $location) {
  // This happens after view/controller loads -- not ideal but it works for now.
  var vm = this;
  var feeling ;
  console.log('checking user');

  // Upon load, check this user's session on the server
  $http.get('/user').then(function(response) {
      if(response.data.username) {
          // user has a curret session on the server
          vm.userName = response.data.username;
          vm.phoneOne = '+1' + response.data.personeonenumber;
          vm.phoneTwo = '+1' + response.data.persontwonumber;
          console.log('User Data: ', vm.userName);
      } else {
          // user has no session, bounce them back to the login page
          $location.path("/home");
      }
  });

  vm.logout = function() {
    $http.get('/user/logout').then(function(response) {
      console.log('logged out');
      $location.path("/home");
    });
  }

  vm.selectFeeling = function () {
    if(feeling <= 4) {
      console.log('sad');
    $http({
      url: '/sendMessage',
      method: 'POST',
      data: {username: vm.userName, phoneOne: vm.phoneOne, phoneTwo: vm.phoneTwo}
    }).then(function success(res) {
      console.log('res->', res);
    }, function fail(res) {
      console.log(res);
    });
    } else {
      console.log('not sad');
    };

  };

vm.selectRadio = function (number) {
  feeling = number;
  console.log('feeling ->', feeling);
}
vm.journal = function () {
  $location.path("/journal");
}
vm.addJournal = function(){
    console.log("in add journal route!");
    console.log("journal entry: " + vm.user.journal);

    var objectToSend = {
      journal: vm.user.journal
    };
    console.log('object to send: ', objectToSend);

    $http({
      method: 'POST',
      url: '/journal',
      data: objectToSend
    }).then(function(response){
      console.log('response in $http: ', response.config.data);

      vm.user.journal = '';

      vm.getJournal();
    });
  };
  vm.getJournal = function () {
      $http({
        method: 'GET',
        url: '/journal',
      }).then(function (response){
        console.log('response from server in getJournal route ', response.data);
        vm.journalArray = response.data;
      });
    };

}]);
