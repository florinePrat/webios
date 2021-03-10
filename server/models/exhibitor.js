const mongoose = require("mongoose");

const exhibitorSchema = mongoose.Schema({
    name: { type: String},
    contacts : [{type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}],
    mainContact : {type: mongoose.Schema.Types.ObjectId, ref: 'Contact'},
    booking: {type: mongoose.Schema.Types.ObjectId, ref: 'Booking'},
    present : {type : String},
    animatorNeeded : {type : Boolean},
    publisher : {type : Boolean},
    publisherName : {type : String},
    place : {type : String},
    datContact1 : {type : Date},
    datContact2 : {type : Date},
    crSended : {type : Boolean},
    invoiceSended : {type : Boolean},
    paymentOk : {type : Boolean},
    statusTraking : {type : String},
    gameList : [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
    gameBookedList : [{type: mongoose.Schema.Types.ObjectId, ref: 'BookingGame'}],
});

module.exports = mongoose.model('Exhibitor', exhibitorSchema);
