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
              lat: 37.774,
              lon: -122.414
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
              lat: 37.774,
              lon: -122.413
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
              lat: 37.774,
              lon: -122.412
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
              lat: 37.774,
              lon: -122.410
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
              lat: 37.774,
              lon: -122.417
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
