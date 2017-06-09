myApp.controller('EditController', ['UserService','$http', '$location', function(UserService, $http, $location) {
var vm = this;
vm.getUserInfo = function () {
  UserService.getUser().then(function (response) {
    console.log('response ->', response);
    vm.user = response;
  });
};
vm.getUserInfo();


vm.editProfile = function (id) {
console.log('in editProfile function');

var objectToSend = {
  _id: id,
  persononename:  vm.personOneNew,
  personeonenumber: "+1" + vm.phoneOneNew,
  persontwoname: vm.personTwoNew,
  persontwonumber: "+1" + vm.phoneTwoNew
}; // end objectToSend

console.log('objToSend ->', objectToSend);
$http({
  method: 'PUT',
  url: '/user/' + id,
  data: objectToSend
}).then(function(response){
  console.log('response in $http put: ', response);
});

vm.getUserInfo();
};

}]);
