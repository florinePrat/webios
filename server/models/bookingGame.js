const mongoose = require("mongoose");

const bookingGameSchema = mongoose.Schema({
    gameId: {type: mongoose.Schema.Types.ObjectId, ref: 'Game'},
    festivalId: {type: mongoose.Schema.Types.ObjectId, ref: 'Festival'},
    space: {type: String}, // or Number let's see
    qtExhib : {type: Number},
    qtSend : {type: Number},
    putOnPlan : {type: Boolean},
    bringByExhibitor : {type: Boolean},
    received : {type: Boolean},
    isCallback : {type: Boolean},
    callbackPrice : {type: Float32Array},
    isCallbackDone : {type: Boolean},
});

module.exports = mongoose.model('BookingGame', bookingGameSchema);
