// console.log('map.js linked');

function mapLink() {
  console.log('map.js is linked to this page');
}

var map;
var sanFran = {lat: 37.774, lng: -122.419};

function initMap(
  driverOneLat, driverOneLon,
  driverTwoLat, driverTwoLon,
  driverThreeLat, driverThreeLon,
  driverFourLat, driverFourLon,
  driverFiveLat, driverFiveLon
) {

  var driverOneLoc = {lat: driverOneLat, lng: driverOneLon};
  var driverTwoLoc = {lat: driverTwoLat, lng: driverTwoLon};
  var driverThreeLoc = {lat: driverThreeLat, lng: driverThreeLon};
  var driverFourLoc = {lat: driverFourLat, lng: driverFourLon};
  var driverFiveLoc = {lat: driverFiveLat, lng: driverFiveLon};

  map = new google.maps.Map(document.getElementById('driversMap'), {
    center: {lat: 37.774, lng: -122.419},
    zoom: 11,
    styles:
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#523735"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#c9b2a6"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#dcd2be"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#ae9e90"
          }
        ]
      },
      {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#93817c"
          }
        ]
      },
      {
        "featureType": "poi.business",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#a5b076"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#447530"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f1e6"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#fdfcf8"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f8c967"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#e9bc62"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e98d58"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#db8555"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#806b63"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#8f7d77"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#ebe3cd"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dfd2ae"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "color": "#b9d3c2"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#92998d"
          }
        ]
      }
    ]
  });

  var iconBase = '../icons/web/';
  var truckIcon = iconBase + 'Pickup Green Marker.png';

    // library: {
    //   icon: iconBase + 'library_maps.png'
    // },
    // info: {
    //   icon: iconBase + 'info-i_maps.png'
    // }
  // };

  // console.log(icons);
  //
  // function addMarker(feature) {
  //   var marker = new google.maps.Marker({
  //     position: feature.position,
  //     icon: icons[feature.type].icon,
  //     map: map
  //   });
  // }


  // var features = [
  //   console.log(icon
  //     {
  //       position: new google.maps.LatLng(),
  //       type: 'info'
  //     },
  //     // {
  //     //   position: new google.maps.LatLng(37.775, -122.418),
  //     //   type: 'info'
  //     // }, {
  //     //   position: new google.maps.LatLng(37.776, -122.417),
  //     //   type: 'info'
  //     // }, {
  //     //   position: new google.maps.LatLng(37.777, -122.416),
  //     //   type: 'info'
  //     // }
  //   ];
  //
    // for (var i = 0, feature; feature = features[i]; i++) {
    //   addMarker(marker);
    // }
  // }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var userLoc = {lat: position.coords.latitude, lng: position.coords.longitude};
        map.setCenter(userLoc);

        var marker = new google.maps.Marker({
          position: sanFran,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: truckIcon
        });

        var marker = new google.maps.Marker({
          position: driverOneLoc,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: truckIcon
        });

        var marker = new google.maps.Marker({
          position: driverTwoLoc,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: truckIcon
        });

        var marker = new google.maps.Marker({
          position: driverThreeLoc,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: truckIcon
        });

        var marker = new google.maps.Marker({
          position: driverFourLoc,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: truckIcon
        });

        var marker = new google.maps.Marker({
          position: driverFiveLoc,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: truckIcon
        });

        // marker.addListener('click', toggleBounce);

    });
  }
}
