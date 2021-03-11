const mongoose = require("mongoose");

const festivalSchema = mongoose.Schema({
    name: {type : String},
    current: {type : Boolean},
    exhibitors : [{type: mongoose.Schema.Types.ObjectId, ref: 'Exhibitor'}],
    gameBookedList : [{type: mongoose.Schema.Types.ObjectId, ref: 'BookingGame'}],
    space: {type: mongoose.Schema.Types.ObjectId, ref: 'Space'},
});

module.exports = mongoose.model('Festival', festivalSchema);
