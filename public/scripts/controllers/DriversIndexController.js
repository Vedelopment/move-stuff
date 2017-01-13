angular
  .module('haul')
  .controller('DriversIndexController', DriversIndexController);

DriversIndexController.$inject = ['$http'];

function DriversIndexController ($http) {
  var vm = this;
  vm.newDriver = {};
  vm.newDriver = {
    name: 'Viva Hate',
    artistName: 'Morrissey'
  };

  $http({
    method: 'GET',
    url: '/api/drivers'
  }).then(function successCallback(response) {
    vm.drivers = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createDriver = function () {
    $http({
      method: 'POST',
      url: '/api/drivers',
      data: vm.newDriver,
    }).then(function successCallback(response) {
      vm.drivers.push(response.data);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  vm.editDriver = function (driver) {
    $http({
      method: 'PUT',
      url: '/api/drivers/'+driver._id,
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
      url: '/api/drivers/'+ driver._id
    }).then(function successCallback(json) {
      var index = vm.drivers.indexOf(driver);
      vm.drivers.splice(index,1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
