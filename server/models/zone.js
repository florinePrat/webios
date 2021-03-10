const mongoose = require("mongoose");

const zoneSchema = mongoose.Schema({
    name: {type : String},
    festivalId : {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
});

module.exports = mongoose.model('Zone', zoneSchema);
