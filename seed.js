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
