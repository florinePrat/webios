const mongoose = require("mongoose");

const bookingGameSchema = mongoose.Schema({
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    publisherId: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
    space: {type: mongoose.Schema.Types.ObjectId, ref: 'Space'},
    zone: {type: String},
    qtExhib : {type: Number},
    qtSend : {type: Number},
    qtTombolat : {type : Number},
    qtDotation : {type : Number},
    comment : {type : String},
    putOnPlan : {type: Boolean},
    bringByExhibitor : {type: Boolean},
    received : {type: Boolean},
    animator : {type: Boolean},
    isCallback : {type: Boolean},
    callbackPrice : {type: Float32Array},
    isCallbackDone : {type: Boolean},
});

module.exports = mongoose.model('BookingGame', bookingGameSchema);
