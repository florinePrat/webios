const mongoose = require("mongoose");

const festivalSchema = mongoose.Schema({
    name: {type : String},
    current: {type : Boolean},
});

module.exports = mongoose.model('Festival', festivalSchema);
