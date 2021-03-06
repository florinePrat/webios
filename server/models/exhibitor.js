const mongoose = require("mongoose");

const exhibitorSchema = mongoose.Schema({
    table /*(table?)*/: {},
    gameList : [{}],
});

module.exports = mongoose.model('Exhibitor', exhibitorSchema);
