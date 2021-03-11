const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema({
    name : {type : String},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    numberOfTable1: {type : Number},
    unitPriceOfTable1 : {type: Float32Array},
    m2Price1 : {type: Float32Array},
    numberOfTable2: {type : Number},
    unitPriceOfTable2 : {type: Float32Array},
    m2Price2 : {type: Float32Array},
    numberOfTable3: {type : Number},
    unitPriceOfTable3 : {type: Float32Array},
    m2Price3 : {type: Float32Array},
});

module.exports = mongoose.model('Booking', spaceSchema);
