const Space = require('../models/space');

const getSpaceById = async(_id) => {
    try {
        return await Space.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createSpace = async (numberOfTable, unitPriceOfTable, m2Price) => {
    try {
        const space = new Space({
            numberOfTable,
            unitPriceOfTable,
            m2Price
        });
        console.log(space);
        return await space.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getSpaceById,
    createSpace,
};
