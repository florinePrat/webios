const Zone = require('../models/zone');

const getZoneByName = async(name) => {
    try {
        return await Zone.findOne({name});
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getZoneByName,
};