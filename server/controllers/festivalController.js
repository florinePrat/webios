const Festival = require('../models/festival');

const getFestivalById = async(_id) => {
    try {
        return await Festival.findById(_id);
    } catch (error) {
        console.log(error);
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

const createFestival = async (name) => {
    try {
        const festival = new Festival({
            name
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
    getFestivalByName,
    createFestival,
};
