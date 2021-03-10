const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    nbTableSpace1: {type : Float32Array},
    nbTableSpace2: {type : Float32Array},
    nbTableSpace3: {type : Float32Array},
    nbM2Space1: {type : Float32Array},
    nbM2Space2: {type : Float32Array},
    nbM2Space3: {type : Float32Array},
});

module.exports = mongoose.model('Booking', bookingSchema);
