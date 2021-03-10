const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    firstName: {type : String},
    lastName: {type : String},
    email: {type : String},
    address: {type : String},
    telFixe : {type : Number},
    telMobile : {type : Number},
    work : {type : String},
    publisherId: {type: mongoose.Schema.Types.ObjectId, ref: 'Publisher'},
});

module.exports = mongoose.model('Contact', contactSchema);
