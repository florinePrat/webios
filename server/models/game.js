const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    name: {type: String, require: true},
    ageMin : {type: Number},
    duration: {type: Number},
    nbPlayersMin: {type: Number},
    nbPlayersMax: {type: Number},
    category : {type: String},
    description : {type: String},
    publisherId : {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
    prototypeGame : {type : Boolean}
});

module.exports = mongoose.model('Game', gameSchema);
