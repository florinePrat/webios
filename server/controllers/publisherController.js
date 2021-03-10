const Publisher = require('../models/publisher');

const getPublisherById = async(_id) => {
    try {
        return await Publisher.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createPublisher = async (name, gameList) => {
    try {
        const publisher = new Publisher({
            name,
            gameList
        });
        console.log(publisher);
        return await publisher.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getPublisherById,
    createPublisher,
};
