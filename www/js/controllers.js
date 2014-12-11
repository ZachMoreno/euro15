angular.module('euro15.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ItineraryCtrl', function($scope) {
  $scope.cities = [
  {
    "name": "Chicago",
    "country": "USA",
    "startDate": "Wed Sept 2",
    "endDate": "Thur Sept 3",
    "agenda": [
      {
        "date": "Wed Sept 2",
        "items": [
          {
            "title": "Bop N Grill",
            "startTime": "12:00pm",
            "endTime": "1:30pm"
          },
          {
            "title": "Giordano's",
            "startTime": "6:00pm",
            "endTime": "7:30pm"
          } 
        ]
      }  
    ]
  },
  {
    "name": "Edinburgh",
    "country": "Scotland",
    "startDate": "Fri Sept 4",
    "endDate": "Sun Sept 6"
  },
  {
    "name": "Amsterdam",
    "country": "Netherlands",
    "startDate": "Mon Sept 7",
    "endDate": "Tues Sept 8"
  },
  {
    "name": "Munich",
    "country": "Germany",
    "startDate": "Wed Sept 9",
    "endDate": "Thur Sept 10"
  },
  {
    "name": "Venice",
    "country": "Italy",
    "startDate": "Fri Sept 11",
    "endDate": "Sat Sept 12"
  },
  {
    "name": "Marseilles",
    "country": "France",
    "startDate": "Sun Sept 13",
    "endDate": "Mon Sept 14"
  },
  {
    "name": "Barcelona",
    "country": "Spain",
    "startDate": "Tues Sept 15",
    "endDate": "Wed Sept 16"
  },
  {
    "name": "New York",
    "country": "USA",
    "startDate": "Thur Sept 17",
    "endDate": "Fri Sept 18"
  }
];
})

.controller('CityCtrl', function($scope, $stateParams) {

});
