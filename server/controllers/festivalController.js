const Festival = require('../models/festival');

const getFestivalById = async(_id) => {
    try {
        return await Festival.findById(_id).populate('zoneId').populate('space');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getAllFestival = async() => {
    try {
        return await Festival.find();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getCurrentFestival = async() => {
    try {
        return await Festival.findOne({current : true}).populate('space').populate('zoneId').populate('gameBookedList');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getExhibitorsByFestivalId = async(festivalId) => {
    try {
        return await Festival.findById(festivalId).populate({path : 'exhibitors', populate : [{path :  'suiviId'}, {path :  'mainContact'}, {path :  'contacts'}, {path :  'booking'},{path :  'gameList'},{path :  'gameBookedList'}]});
    } catch (error) {
        console.log(error);
        throw error;
    }
};


const updateFestival = async (informations,idFestival) => {
    try{
        return await Festival.findOneAndUpdate({_id: idFestival}, {...informations, _id: idFestival}, {new:true})
    }catch (error) {
        throw error;
    }
};

const addExhibitorToFestival = async (exhibitorId,idFestival) => {
    try{
        return await Festival.findOneAndUpdate({_id: idFestival}, {$push : {exhibitors : exhibitorId} , _id: idFestival}, {new:true})
    }catch (error) {
        throw error;
    }
};

const addBookingGameToFestival = async (gameBookingId,idFestival) => {
    try{
        return await Festival.findOneAndUpdate({_id: idFestival}, {$push : {gameBookedList : gameBookingId} , _id: idFestival}, {new:true})
    }catch (error) {
        throw error;
    }
};

const addSpaceToFestival = async (spaceId,idFestival) => {
    try{
        return await Festival.findOneAndUpdate({_id: idFestival}, {space : spaceId , _id: idFestival}, {new:true})
    }catch (error) {
        throw error;
    }
};

const addZoneToFestival = async (zoneId,idFestival) => {
    try{
        return await Festival.findOneAndUpdate({_id: idFestival}, {$push : {zoneId} , _id: idFestival}, {new:true})
    }catch (error) {
        throw error;
    }
};

const updateCurrentFestival = async (current,idFestival) => {
    try{
        return await Festival.findOneAndUpdate({_id: idFestival}, {current, _id: idFestival}, {new:true})
    }catch (error) {
        throw error;
    }
};



const getFestivalByName = async(name) => {
    try {
        return await Festival.findOne({name});
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createFestival = async (name, current,exhibitors,gameBookedList,space) => {
    try {
        const festival = new Festival({
            name, current,exhibitors,gameBookedList,space
        });
        console.log(festival);
        return await festival.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const deleteFestival = async (_id) => {
    try{
        console.log(_id)
        return await Festival.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getFestivalById,
    getAllFestival,
    getFestivalByName,
    createFestival,
    getCurrentFestival,
    updateCurrentFestival,
    updateFestival,
    deleteFestival,
    addExhibitorToFestival,
    addSpaceToFestival,
    addBookingGameToFestival,
    getExhibitorsByFestivalId,
    addZoneToFestival
};
