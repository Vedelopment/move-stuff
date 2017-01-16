var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DriverSchema = new Schema({
  name: String,
  img: String,
  readOnly: String,
  rating: String,
  location: String,
  vehicles: [
    String,
    String
  ],
  availability: String,
  rate: String,
  lat: Number,
  lon: Number
});

var Driver = mongoose.model('Driver', DriverSchema);

module.exports = Driver;
