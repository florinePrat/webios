const Festival = require('../models/festival');

const getFestivalById = async(_id) => {
    try {
        return await Festival.findById(_id);
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
        return await Festival.findOne({current : true});
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

const createFestival = async (name, current) => {
    try {
        const festival = new Festival({
            name, current
        });
        console.log(festival);
        return await festival.save();
    } catch (error) {
        console.log(error);
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
    updateFestival
};
