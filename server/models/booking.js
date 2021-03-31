const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    nbTableSpace1: {type : Number},
    nbTableSpace2: {type : Number},
    nbTableSpace3: {type : Number},
    nbM2Space1: {type : Number},
    nbM2Space2: {type : Number},
    nbM2Space3: {type : Number},
    negociedPrice: {type : Number},
    animatorNeeded : {type : Boolean},
    crSended : {type : Boolean},
    invoiceSended : {type : Boolean},
    paymentOk : {type : Boolean},
    putOnPlan : {type: Boolean},
    exhibitorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Exhibitor'},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
});

module.exports = mongoose.model('Booking', bookingSchema);
