const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    table /*(table?)*/: {},
    price: {type : Number},
    paid : {type: Boolean},
});

module.exports = mongoose.model('Booking', bookingSchema);
