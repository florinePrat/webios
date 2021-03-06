const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema({
    numberOfTable: {type : Number},
    zone : {type: String},
});

module.exports = mongoose.model('Booking', spaceSchema);
