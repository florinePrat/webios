const Exhibitor = require('../models/exhibitor');

const getExhibitorById = async(_id) => {
    try {
        return await Exhibitor.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createExhibitor = async (contacts,mainContact,booking,present,animatorNeeded,place,datContact1,datContact2,crSended,invoiceSended,paymentOk,statusTraking,gameList,gameBookedList) => {
    try {
        const exhibitor = new Exhibitor({
            contacts,mainContact,booking,present,animatorNeeded,place,datContact1,datContact2,crSended,invoiceSended,paymentOk,statusTraking,gameList,gameBookedList
        });
        console.log(exhibitor);
        return await exhibitor.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getExhibitorById,
    createExhibitor,
};
