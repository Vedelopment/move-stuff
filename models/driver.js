var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DriverSchema = new Schema({
  name: String,
  rating: String,
  location: String,
  vehicles: String,
  availability: String,
  rate: String,
});

var Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
