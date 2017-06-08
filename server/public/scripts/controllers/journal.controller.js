myApp.controller('JournalController', ['$http', '$location', function($http, $location) {
var vm = this;

// function to get journal entry from database
vm.getJournal = function (id, name) {
  $http({
    method: 'GET',
    url: '/journal'
  }).then(function (response){
    console.log('response from server in getJournal route ', response);
    vm.journalArray = response.data;
  });
}; // end getJournal

// function to add journal entry to database
vm.addJournal = function(){
  console.log("in add journal route!");
  console.log("journal entry: " + vm.user.journal);

  var objectToSend = {
    journal: vm.user.journal,
    username: vm.userName
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
}; // end add journal


}]);
