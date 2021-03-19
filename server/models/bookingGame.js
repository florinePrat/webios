const mongoose = require("mongoose");

const bookingGameSchema = mongoose.Schema({
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    exhibitorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Exhibitor'},
    bookingId: {type: mongoose.Schema.Types.ObjectId, ref: 'Booking'},
    zone: {type: mongoose.Schema.Types.ObjectId, ref: 'Zone'},
    qtExhib : {type: Number},
    qtSend : {type: Number},
    tombola : {type : Boolean},
    dotation : {type : Boolean},
    dateAdd : {type : Date},
    comment : {type : String},
    putOnPlan : {type: Boolean},
    bringByExhibitor : {type: Boolean},
    received : {type: Boolean},
    place : {type : Boolean}, // Placé sur le plan ou non
    isCallback : {type: Boolean},
    callbackPrice : {type: Number}, // C'était un tableau 
    isCallbackDone : {type: Boolean},
});

module.exports = mongoose.model('BookingGame', bookingGameSchema);
