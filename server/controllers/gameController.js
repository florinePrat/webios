const Game = require('../models/game');

const getGameById = async(_id) => {
    try {
        return await Game.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getGameByName = async(name) => {
    try {
        return await Game.findOne({name});
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createGame = async (name,ageMin,duration,category,prototype) => {
    try {
        const game = new Game({
            name,ageMin,duration,category,prototype
        });
        console.log(game);
        return await game.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getGameById,
    getGameByName,
    createGame,
};
