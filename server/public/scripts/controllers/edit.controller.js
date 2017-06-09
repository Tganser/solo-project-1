// myApp.controller('EditController', ['$http', '$location', function($http, $location) {
// var vm = this;
//
//
//
// $http.get('/user').then(function(response) {
//   console.log("response ->", response);
//   console.log('UserId ->', response.data._id)
//   vm.userId = response.data._id;
//   console.log('vm.userId->', vm.userId);
//   if(response.data.username) {
//     // user has a curret session on the server
//     vm.userId = response.data._id;
//     vm.userName = response.data.username;
//     vm.password = response.data.password;
//     vm.personOne = response.data.persononename;
//     vm.phoneOne = response.data.personeonenumber;
//     vm.personTwo = response.data.persontwoname;
//     vm.phoneTwo = response.data.persontwonumber;
//     console.log('Username: ', vm.userName);
//     console.log('UserId:', vm.userId);
//     console.log('Password:', vm.password);
//     console.log('Persone One:', vm.personOne);
//     console.log('Phone One: ', vm.phoneOne);
//     console.log('Person Two:', vm.personTwo);
//     console.log('Phone Two: ', vm.phoneTwo);
//     return vm.userId;
//
//   } else {
//     // user has no session, bounce them back to the login page
//     $location.path("/home");
//   }
// }); // end getuser
// console.log("User Id ->", vm.userId);
// // vm.editProfile = function () {
// // console.log('in editProfile function');
// //
// // var objectToSend = {
// //   username: vm.userNameNew,
// //   password: vm.password,
// //   persononename: vm.personOne,
// //   personeonenumber: vm.phoneOne,
// //   persontwoname: vm.personTwo,
// //   persontwonumber: vm.phoneTwo
// // }; // end objectToSend
// //
// // $http({
// //   method: 'PUT',
// //   url: '/user/' + id,
// //   data: objectToSend
// // }).then(function(response){
// //   console.log('response in $http put: ', response);
// // };
//
// }]);
