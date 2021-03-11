const Zone = require('../models/zone');

const getZoneByName = async(name) => {
    try {
        return await Zone.findOne({name});
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createZone = async (name, festivalId, gamesId) => {
    try {
        const zone = new Zone({
            name, festivalId, gamesId        
        });
        console.log(zone);
        return await zone.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateZone = async (informations,idZone) => {
    try{
        return await Zone.findOneAndUpdate({_id: idZone}, {...informations, _id: idZone}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteZone = async (_id) => {
    try{
        console.log(_id)
        return await Zone.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getZoneByName,
    createZone,
    updateZone,
    deleteZone
};