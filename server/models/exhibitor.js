const mongoose = require("mongoose");

const exhibitorSchema = mongoose.Schema({
    name: { type: String},
    contacts : [{type: mongoose.Schema.Types.ObjectId, ref: 'Contact'}],
    mainContact : {type: mongoose.Schema.Types.ObjectId, ref: 'Contact'},
    booking: [{type: mongoose.Schema.Types.ObjectId, ref: 'Booking'}],
    publisherOnly : {type : Boolean},
    gameList : [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
    gameBookedList : [{type: mongoose.Schema.Types.ObjectId, ref: 'BookingGame'}],
    suiviId: {type: mongoose.Schema.Types.ObjectId, ref: 'Suivi'},
});

module.exports = mongoose.model('Exhibitor', exhibitorSchema);
