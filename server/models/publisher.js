const mongoose = require("mongoose");

const publisherSchema = mongoose.Schema({
    name: { type: String, require: true},
    email: { type: String, require: true},
    phone: { type: Number},
    gameList : [{}],
});

module.exports = mongoose.model('Publisher', publisherSchema);
