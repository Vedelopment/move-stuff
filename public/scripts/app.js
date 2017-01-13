console.log('sanity check');

angular
  .module('haul', ['ngRoute', 'jkAngularRatingStars'])
  .config(config)
  // .controller('DriversIndexController', DriversIndexController);

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

// function DriversIndexController () {
//   var vm = this;
//   vm.Driver = {};
    // vm.Driver = {
    //               name: 'Jana',
    //               img: '/images/Jana.png',
    //               readOnly: '4',
    //               rating: '4',
    //               location: 'San Francisco',
    //               vehicles: ['car', 'truck'],
    //               availability: 'yes',
    //               rate: '$20/hr',
    //             },
    //             {
    //               name: 'Jay',
    //               img: '/images/Jay.png',
    //               rating: '3.5',
    //               readOnly: '3.5',
    //               location: 'San Francisco',
    //               vehicles: ['car', 'truck'],
    //               availability: 'yes',
    //               rate: '$20/hr',
    //             },
    //             {
    //               name: 'John',
    //               img: '/images/John.png',
    //               rating: '4',
    //               readOnly: '4',
    //               location: 'San Francisco',
    //               vehicles: ['car', 'truck'],
    //               availability: 'yes',
    //               rate: '$20/hr',
    //             },
    //             {
    //               name: 'Marissa',
    //               img: '/images/Marissa.png',
    //               rating: '3.5',
    //               readOnly: '3.5',
    //               location: 'San Francisco',
    //               vehicles: ['car', 'truck'],
    //               availability: 'yes',
    //               rate: '$20/hr',
    //             },
    //             {
    //               name: 'Shaan',
    //               img: '/images/Shaan.png',
    //               rating: '5',
    //               readOnly: '5',
    //               location: 'San Francisco',
    //               vehicles: ['car', 'truck'],
    //               availability: 'yes',
    //               rate: '$20/hr',
    //             };
  // };
