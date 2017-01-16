var db = require("./models");

var driverList =[];

driverList.push({
              name: 'Jana',
              img: '/images/Jana.png',
              readOnly: '4',
              rating: '4',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$20/hr',
              lat: 37.814,
              lon: -122.300
            });
driverList.push({
              name: 'Jay',
              img: '/images/Jay.png',
              rating: '3.5',
              readOnly: '3.5',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$23/hr',
              lat: 37.754,
              lon: -122.416
            });
driverList.push({
              name: 'John',
              img: '/images/John.png',
              rating: '4',
              readOnly: '4',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$25/hr',
              lat: 37.744,
              lon: -122.406
            });
driverList.push({
              name: 'Marissa',
              img: '/images/Marissa.png',
              rating: '3.5',
              readOnly: '3.5',
              location: 'San Francisco',
              vehicles: ['car', 'truck with trailor'],
              availability: 'yes',
              rate: '$30/hr',
              lat: 37.758,
              lon: -122.500
            });
driverList.push({
              name: 'Shaan',
              img: '/images/Shaan.png',
              rating: '5',
              readOnly: '5',
              location: 'San Francisco',
              vehicles: ['car', 'large truck'],
              availability: 'yes',
              rate: '$28/hr',
              lat: 37.762,
              lon: -122.457
            });

            console.log(driverList);
db.Driver.remove({}, function(err, drivers){

  db.Driver.create(driverList, function(err, drivers){
    if (err) {
      return console.log('ERROR', err);
    }
    console.log("all drivers:", drivers);
    console.log("created", drivers.length, "drivers");
    process.exit();

  });

});
