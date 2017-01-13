var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/haul_test");

var Driver = require('./driver');

module.exports.Driver = Driver;
// module.exports.Song = require('./song');
