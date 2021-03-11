const Exhibitor = require('../models/exhibitor');

const getExhibitorById = async(_id) => {
    try {
        return await Exhibitor.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createExhibitor = async ({name,contacts,mainContact,booking,present,animatorNeeded,publisher,publisherName,place,datContact1,datContact2,crSended,invoiceSended,paymentOk,statusTraking,gameList,gameBookedList}) => {
    try {
        const exhibitor = new Exhibitor({
            name,contacts,mainContact,booking,present,animatorNeeded,publisher,publisherName,place,datContact1,datContact2,crSended,invoiceSended,paymentOk,statusTraking,gameList,gameBookedList
        });
        console.log(exhibitor);
        return await exhibitor.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateExhibitor = async ({name,contacts,mainContact,booking,present,animatorNeeded,publisher,publisherName,place,datContact1,datContact2,crSended,invoiceSended,paymentOk,statusTraking,gameList,gameBookedList,idExhibitor}) => {
    try{
        return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {name, $push : {contacts},mainContact,booking,present,animatorNeeded,publisher,publisherName,place,datContact1,datContact2,crSended,invoiceSended,paymentOk,statusTraking, $push: {gameList}, $push : {gameBookedList}, _id: idExhibitor}, {new:true})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getExhibitorById,
    createExhibitor,
    updateExhibitor
};
