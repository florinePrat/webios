const mongoose = require("mongoose");

const bookingGameSchema = mongoose.Schema({
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    exhibitorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Exhibitor'},
    space: {type: mongoose.Schema.Types.ObjectId, ref: 'Space'},
    zone: {type: String},
    qtExhib : {type: Number},
    qtSend : {type: Number},
    tombola : {type : Boolean},
    dotation : {type : Boolean},
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
