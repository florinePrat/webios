const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema({
    name : {type : String},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    numberOfTable: {type : Number},
    unitPriceOfTable : {type: Float32Array},
    m2Price : {type: Float32Array},
});

module.exports = mongoose.model('Booking', spaceSchema);
