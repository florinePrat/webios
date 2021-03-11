const mongoose = require("mongoose");

const suiviSchema = mongoose.Schema({
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    exhibitorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Exhibitor'},
    datContact1 : {type : Date},
    datContact2 : {type : Date},
    present : {type : Boolean},
    statusTraking : {type : String},
});

module.exports = mongoose.model('Suivi', suiviSchema);
