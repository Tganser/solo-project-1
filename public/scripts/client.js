var myApp = angular.module('myApp',  []);
console.log('ng');
var vm = this;
myApp.controller('FirstController', function ($http) {
console.log('in controller');

  vm.sendText = function ({
    $http({
      method: 'POST',
      url: '/test'
  });
});
});
