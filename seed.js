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
              rating: '3.5',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$20/hr',
            });
driverList.push({
              name: 'John',
              rating: '4',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$20/hr',
            });
driverList.push({
              name: 'Marissa',
              rating: '3.5',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$20/hr',
            });
driverList.push({
              name: 'Shaan',
              rating: '5',
              location: 'San Francisco',
              vehicles: ['car', 'truck'],
              availability: 'yes',
              rate: '$20/hr',
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
