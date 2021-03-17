const mongoose = require("mongoose");

const spaceSchema = mongoose.Schema({
    name : {type : String},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    numberOfTable1: {type : Number},
    unitPriceOfTable1 : {type: Number},
    m2Price1 : {type: Number},
    numberOfTable2: {type : Number},
    unitPriceOfTable2 : {type: Number},
    m2Price2 : {type: Number},
    numberOfTable3: {type : Number},
    unitPriceOfTable3 : {type: Number},
    m2Price3 : {type: Number},
});

module.exports = mongoose.model('Space', spaceSchema);
