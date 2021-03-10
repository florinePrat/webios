const mongoose = require("mongoose");

const publisherSchema = mongoose.Schema({
    name: { type: String, require: true},
    gameList : [{type: mongoose.Schema.Types.ObjectId, ref: 'Game'}],
});

module.exports = mongoose.model('Publisher', publisherSchema);
