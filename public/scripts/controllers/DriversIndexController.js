// SANITY CHECK FOR LINKING VANILLA JS DOCS TO ANGULAR JS FILE, THIS FUNCTION IS IN MAP.JS
// mapLink();

angular
  .module('haul')
  .controller('DriversIndexController', DriversIndexController);

DriversIndexController.$inject = ['$http'];

function DriversIndexController ($http) {
  var vm = this;
  vm.drivers = {};


  $http({
    method: 'GET',
    url: '/api/drivers'
  }).then(function successCallback(response) {


    vm.drivers = response.data;
    console.log(response.data[0].name);
    var driverLocs = response.data[0].loc;
    initMap(driverLocs);

  //   window.onload = function() {
  //
  //
  // };


  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createDriver = function () {
    console.log(vm.newDriver.name);
    // console.log(vm.newDriver.name);
    // if (vm.newDriver.img === 'n') {
    //   vm.newDriver.img = 'defaultAvatar.png';
    // }
    $http({
      method: 'POST',
      url: '/api/drivers',
      data: vm.newDriver,
    }).then(function successCallback(response) {
        // console.lo g(response.data);
      vm.drivers.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  vm.editDriver = function (driver) {
    $http({
      method: 'PUT',
      url: '/api/drivers/' + driver._id,
      data: driver
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteDriver = function (driver) {
    $http({
      method: 'DELETE',
      url: '/api/drivers/' + driver._id
    }).then(function successCallback(json) {
      var index = vm.drivers.indexOf(driver);
      vm.drivers.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
