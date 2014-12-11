// Ionic euro15 App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'euro15' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'euro15.controllers' is found in controllers.js
angular.module('euro15', ['ionic', 'euro15.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.map', {
    url: "/map",
    views: {
      'menuContent': {
        templateUrl: "templates/map.html"
      }
    }
  })
    .state('app.itinerary', {
      url: "/itinerary",
      views: {
        'menuContent': {
          templateUrl: "templates/itinerary.html",
          controller: 'ItineraryCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/itinerary/:cityName",
    views: {
      'menuContent': {
        templateUrl: "templates/city.html",
        controller: 'CityCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/itinerary');
});
