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

  map = new google.maps.Map(document.getElementById('driversMap'), {
    center: sanFran,
    zoom: 11,
    styles:
    [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });

  var driverOneLoc = {lat: driverOneLat, lng: driverOneLon};
  var driverTwoLoc = {lat: driverTwoLat, lng: driverTwoLon};
  var driverThreeLoc = {lat: driverThreeLat, lng: driverThreeLon};
  var driverFourLoc = {lat: driverFourLat, lng: driverFourLon};
  var driverFiveLoc = {lat: driverFiveLat, lng: driverFiveLon};

  var iconBase = '../icons/web/';
  var truckIcon = iconBase + 'Pickup Green Marker 2.png';
  var userLocIcon = 'google.maps.SymbolPath.CIRCLE';

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

  var marker = new google.maps.Marker({
    position: driverOneLoc,
    map: map,
    animation: google.maps.Animation.DROP,
    // icon: truckIcon
  });

  var marker = new google.maps.Marker({
    position: driverTwoLoc,
    map: map,
    animation: google.maps.Animation.DROP,
    // icon: truckIcon
  });

  var marker = new google.maps.Marker({
    position: driverThreeLoc,
    map: map,
    animation: google.maps.Animation.DROP,
    // icon: truckIcon
  });

  var marker = new google.maps.Marker({
    position: driverFourLoc,
    map: map,
    animation: google.maps.Animation.DROP,
    // icon: truckIcon
  });

  var marker = new google.maps.Marker({
    position: driverFiveLoc,
    map: map,
    animation: google.maps.Animation.DROP,
    // icon: truckIcon
  });

  // var contentString = '<div id="content">'+
  //    '<div id="siteNotice">'+
  //    '</div>'+
  //    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  //    '<div id="bodyContent">'+
  //    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  //    'sandstone rock formation in the southern part of the '+
  //    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  //    'south west of the nearest large town, Alice Springs; 450&#160;km '+
  //    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  //    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  //    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  //    'Aboriginal people of the area. It has many springs, waterholes, '+
  //    'rock caves and ancient paintings. Uluru is listed as a World '+
  //    'Heritage Site.</p>'+
  //    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
  //    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
  //    '(last visited June 22, 2009).</p>'+
  //    '</div>'+
  //    '</div>';
  var openInfo = function() {
    console.log('marker clicked');
  };

  // marker.addListener('click', openInfo());
  // infowindow.open(map, marker);
  // map.setZoom(7);
  // map.setCenter(marker.getPosition());
  // });


  marker.addListener('click', openInfo);

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  if (navigator.geolocation) {
    $('#userAlert').html('searching for location...');
    $('#userAlert').removeClass('hide');
    navigator.geolocation.getCurrentPosition(function (position) {
        userLoc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var userLoc = {lat: position.coords.latitude, lng: position.coords.longitude};
        map.setCenter(userLoc);
        map.setZoom(14);

        var marker = new google.maps.Marker({
          position: userLoc,
          map: map,
          // animation: google.maps.Animation.DROP,
          // icon: userLocIcon,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            color: 'yellow',
          },
        });
        $('#userAlert').html('');
        $('#userAlert').addClass('hide');
    });
  } else {
      $('#userAlert').html('');
      $('#userAlert').addClass('hide');
  };
}
