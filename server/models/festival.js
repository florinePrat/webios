const mongoose = require("mongoose");

const festivalSchema = mongoose.Schema({
    name: {type : String},
});

module.exports = mongoose.model('Festival', festivalSchema);
