angular
  .module('haul')
  .controller('DriversShowController', DriversShowController);

DriversShowController.$inject = ['$http', '$routeParams'];

function DriversShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.editSong = function (driver) {
    $http({
      method: 'PUT',
      url: '/api/albums/'+ $routeParams.id + '/drivers/' + driver._id ,
      data: driver
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the data', response);
    });
  }

  vm.deleteSong = function (driver) {
    $http({
      method: 'DELETE',
      url: '/api/albums/'+ $routeParams.id + '/drivers/' + driver._id
    }).then(function successCallback(json) {
      var index = vm.album.drivers.indexOf(driver);
      vm.album.drivers.splice(index, 1);
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

  vm.createSong = function () {
    $http({
      method: 'POST',
      url: '/api/albums/'+ $routeParams.id + '/drivers',
      data: vm.newSong
    }).then(function successCallback(json) {
      vm.album.drivers.push(json.data);
      vm.newSong = {};
    }, function errorCallback(response) {
      console.log('There was an error creating the data', response);
    });
  }

}
