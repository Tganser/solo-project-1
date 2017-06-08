myApp.controller('FeelingController', ['$http', '$location', function($http, $location) {
  var vm = this;
  var feeling ;
  var allFeelings = [];

  // function to select a radio and have it be equal to a number
  vm.selectRadio = function (number) {
    feeling = number;
    console.log('feeling ->', feeling);
  }

  // function to run what happens once you select a feeling 1 - 10
  vm.selectFeeling = function () {
    console.log('in selectFeeling.');
    console.log('Feeling ->', feeling);
    if( feeling === undefined){
      return ;
    }

    var objectToSend = {
      feeling: feeling,
      username: vm.userName
    };
    console.log('objToSend ->', objectToSend);

    $http({
      url: '/feeling',
      method: 'POST',
      data: objectToSend
    }).then(function success(res) {
      console.log('res->', res);
    }, function fail(res) {
      console.log(res);
    });

    if(feeling <= 4) {
      swal({   title: "Uh oh!",   text: "Wanna share your thoughts with us?",   imageUrl: "https://cdn.shopify.com/s/files/1/1061/1924/products/Sad_Face_Emoji_large.png?v=1480481055" });
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
    } if (feeling === 5 ) {
      swal({   title: "That's good to hear!",   text: "Everything's gonna be alright",   imageUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-smiling-eyes.png" });
      console.log('okay ');
    } if (feeling === 6 ) {
      swal({   title: "That's good to hear!",   text: "Everything's gonna be alright",   imageUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-smiling-eyes.png" });
      console.log('okay ');
    } if (feeling === 7 ) {
      swal({   title: "That's good to hear!",   text: "Everything's gonna be alright",   imageUrl: "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-smiling-eyes.png" });
      console.log('okay ');
    } if (feeling === 8 ) {
    console.log('GREAT!');
    swal({   title: "Amazing!!!",   text: "You're doing great",   imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/f7/4e5cf7d4ccb9c59b6620a9c71944d51e.png" });
  } if (feeling === 9 ) {
    console.log('GREAT!');
    swal({   title: "Amazing!!!",   text: "You're doing great",   imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/f7/4e5cf7d4ccb9c59b6620a9c71944d51e.png" });
  } if (feeling === 10 ) {
    console.log('GREAT!');
    swal({   title: "Amazing!!!",   text: "You're doing great",   imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/4e/5c/f7/4e5cf7d4ccb9c59b6620a9c71944d51e.png" });
  }
}; // end selectFeeling

// function to get feeling 1-10 and chart it so users can see it
vm.getFeeling = function () {
  $http({
    method: 'GET',
    url: '/feeling'
  }).then(function (response) {
    console.log('response from server in getFeeling', response);
    vm.feelingArray = response.data;
    // console.log("feelingArray ->", vm.feelingArray);
    for (var i = 0; i < vm.feelingArray.length; i++) {
      var newFeel = vm.feelingArray[i].feeling
      // console.log('newFeel', newFeel);
      allFeelings.push(newFeel);
      // console.log("allFeelings ->", allFeelings);

      drawChart(allFeelings);


    };
  });
  function drawChart() {

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10"],
        datasets: [{
          label: 'Progress',
          data: allFeelings,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }

    });
  } // end drawChart
}; // end get Feeling

  }]);
