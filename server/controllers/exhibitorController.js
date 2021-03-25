const Exhibitor = require('../models/exhibitor');

const getExhibitorById = async(_id) => {
    try {
        return await Exhibitor.findById(_id).populate('gameList').populate({path : 'gameBookedList', populate : [{path : 'gameId'},{path : 'zone'}]}).populate('booking');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getAllExhibitor = async() => {
    try {
        return await Exhibitor.find().populate('suiviId').populate('mainContact').populate('contacts').populate('booking').populate('gameList').populate('gameBookedList');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createExhibitor = async ({name,publisherOnly}) => {
    try {
        const exhibitor = new Exhibitor({
            name,publisherOnly
        });
        console.log(exhibitor);
        return await exhibitor.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateExhibitor = async (informations,idExhibitor) => {
    try{
        return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {...informations, _id: idExhibitor}, {new:true}).populate('suiviId')
    }catch (error) {
        throw error;
    }
};

const addGame = async (gameId,idExhibitor) => {
    try{
        return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {$push : {gameList : gameId}, _id: idExhibitor}, {new:true})
    }catch (error) {
        throw error;
    }
};

const addContact= async (contactId,idExhibitor,mainContact) => {
    try{
        if(!mainContact){
            return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {$push : {contacts : contactId} , _id: idExhibitor}, {new:true})
        }else{
            return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {$push : {contacts : contactId}, mainContact , _id: idExhibitor}, {new:true})
        }

    }catch (error) {
        throw error;
    }
};

const deleteContact= async (contactId,idExhibitor) => {
    try{
        return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {$pull : {contacts : contactId} , _id: idExhibitor}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteGame= async (gameId,idExhibitor) => {
    try{
        return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {$pull : {gameList : gameId} , _id: idExhibitor}, {new:true})
    }catch (error) {
        throw error;
    }
};


const addBookingGame= async (bookingGameId,idExhibitor) => {
    try{
        return await Exhibitor.findOneAndUpdate({_id: idExhibitor}, {$push : {gameBookedList : bookingGameId}, _id: idExhibitor}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteExhibitor = async (_id) => {
    try{
        console.log(_id)
        return await Exhibitor.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getExhibitorById,
    getAllExhibitor,
    createExhibitor,
    addGame,
    addContact,
    deleteContact,
    deleteGame,
    addBookingGame,
    updateExhibitor,
    deleteExhibitor
};
