/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/drivers
function index(req, res) {
  db.Driver.find({}, function(err, allDrivers) {
    res.json(allDrivers);
  });
}

function create(req, res) {
  console.log('body', req.body);

  // split at comma and remove and trailing space
  if (req.body.genres) {
    var genres = req.body.genres.split(',').map(function(item) { return item.trim(); } );
    req.body.genres = genres;
  }

  db.Driver.create(req.body, function(err, driver) {
    if (err) { console.log('error', err); }
    console.log(driver);
    res.json(driver);
  });
}

function show(req, res) {
  db.Driver.findById(req.params.driverId, function(err, foundDriver) {
    if(err) { console.log('driversController.show error', err); }
    console.log('driversController.show responding with', foundDriver);
    res.json(foundDriver);
  });
}

function destroy(req, res) {
  db.Driver.findOneAndRemove({ _id: req.params.driverId }, function(err, foundDriver){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundDriver);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Driver.findById(req.params.driverId, function(err, foundDriver) {
    if(err) { console.log('driversController.update error', err); }
    foundDriver.artistName = req.body.artistName;
    foundDriver.name = req.body.name;
    foundDriver.releaseDate = req.body.releaseDate;
    foundDriver.save(function(err, savedDriver) {
      if(err) { console.log('saving altered driver failed'); }
      res.json(savedDriver);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
