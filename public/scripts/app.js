// console.log('app.js linked');

angular
  .module('haul', ['ngRoute', 'jkAngularRatingStars'])
  .config(config);


  config.$inject = ['$routeProvider', '$locationProvider'];

  function config ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/templates/drivers',
      controllerAs: 'driversIndexCtrl',
      controller: 'DriversIndexController'
    })
    .when('/drivers', {
      templateUrl: '/templates/drivers',
      controllerAs: 'driversIndexCtrl',
      controller: 'DriversIndexController'
    })
    .when('/drivers/:id', {
      templateUrl: '/templates/drivers-show',
      controllerAs: 'driversShowCtrl',
      controller: 'DriversShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
