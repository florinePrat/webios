const Space = require('../models/space');

const getSpaceById = async(_id) => {
    try {
        return await Space.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createSpace = async (name, festivalId, numberOfTable1, unitPriceOfTable1, m2Price1, numberOfTable2, unitPriceOfTable2, m2Price2, numberOfTable3, unitPriceOfTable3, m2Price3) => {
    try {
        const space = new Space({
            name, festivalId, numberOfTable1, unitPriceOfTable1, m2Price1, numberOfTable2, unitPriceOfTable2, m2Price2, numberOfTable3, unitPriceOfTable3, m2Price3
        });
        console.log(space);
        return await space.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateSpace = async (informations,idSpace) => {
    try{
        return await Space.findOneAndUpdate({_id: idSpace}, {...informations, _id: idSpace}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteSpace = async (_id) => {
    try{
        console.log(_id)
        return await Space.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};


module.exports = {
    getSpaceById,
    createSpace,
    updateSpace,
    deleteSpace
};
