const mongoose = require("mongoose");

const zoneSchema = mongoose.Schema({
    name: {type : String},
    festivalId : {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    gamesId : [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
});

module.exports = mongoose.model('Zone', zoneSchema);
