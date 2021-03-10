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

const createGame = async (name,ageMin,duration,category,prototype,nbPlayersMin,nbPlayersMax,description,publisherId) => {
    try {
        const game = new Game({
            name,ageMin,duration,category,prototype,nbPlayersMin,nbPlayersMax,description,publisherId
        });
        console.log(game);
        return await game.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateGame = async (informations,idGame) => {
    try{
        return await Game.findOneAndUpdate({_id: idGame}, {...informations, _id: idGame}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteGame = async (_id) => {
    try{
        return await Game.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getGameById,
    getGameByName,
    createGame,
    updateGame,
    deleteGame
};
