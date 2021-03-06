const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    name: { type: String, require: true},
    age: { type: Number},
    duration: { type: Number},
    category : [],
    prototype : {type : Boolean}
});

module.exports = mongoose.model('Game', gameSchema);
