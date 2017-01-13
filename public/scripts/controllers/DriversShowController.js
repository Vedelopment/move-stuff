angular
  .module('haul')
  .controller('DriversShowController', DriversShowController);

DriversShowController.$inject = ['$http', '$routeParams'];

function DriversShowController ($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/drivers/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.driver = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.editDriver = function (driver) {
    $http({
      method: 'PUT',
      url: '/api/drivers/'+ $routeParams.id + '/drivers/' + driver._id ,
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
      url: '/api/drivers/'+ $routeParams.id + '/drivers/' + driver._id
    }).then(function successCallback(json) {
      var index = vm.driver.drivers.indexOf(driver);
      vm.driver.drivers.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

  vm.createDriver = function () {
    $http({
      method: 'POST',
      url: '/api/drivers/'+ $routeParams.id + '/drivers',
      data: vm.newDriver
    }).then(function successCallback(json) {
      vm.driver.drivers.push(json.data);
      vm.newDriver = {};
    }, function errorCallback(response) {
      console.log('There was an error creating the data', response);
    });
  }

}
