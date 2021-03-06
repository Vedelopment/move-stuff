// SANITY CHECK FOR LINKING VANILLA JS DOCS TO ANGULAR JS FILE, THIS FUNCTION IS IN MAP.JS
// mapLink();

angular
  .module('haul')
  .controller('DriversIndexController', DriversIndexController);

DriversIndexController.$inject = ['$http'];
// DriversIndexController.$inject = ['$scope']; //FUTURE JACOB CODE SUGGESTION, ADD INTO FUNCTION ARGUMENTS

function DriversIndexController ($http) {
  var vm = this;
  vm.drivers = {};
  // $scope.drivers = []; //FUTURE JACOB CODE SUGGESTION

  $http({
    method: 'GET',
    url: '/api/drivers'
  }).then(function successCallback(response) {

    console.log(response.data[0]._id);
    // $scope.drivers.push(response.data); //FUTURE JACOB CODE SUGGESTION

    vm.drivers = response.data;

    var driverOneLat = response.data[0].lat;
    var driverOneLon = response.data[0].lon;
    var driverOneId = response.data[0]._id;

    var driverTwoLat = response.data[1].lat;
    var driverTwoLon = response.data[1].lon;
    var driverThreeLat = response.data[2].lat;
    var driverThreeLon = response.data[2].lon;
    var driverFourLat = response.data[3].lat;
    var driverFourLon = response.data[3].lon;
    var driverFiveLat = response.data[4].lat;
    var driverFiveLon = response.data[4].lon;
    // var driverLon = response.data[0].loc.lon;
    initMap(
      driverOneLat, driverOneLon, driverOneId,
      driverTwoLat, driverTwoLon,
      driverThreeLat, driverThreeLon,
      driverFourLat, driverFourLon,
      driverFiveLat, driverFiveLon
    );

  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createDriver = function () {
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
