const BookingGame = require('../models/bookingGame');

const getBookingGameById = async(_id) => {
    try {
        return await BookingGame.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const getAllBookingGameByFestival = async(festivalId) => {
    try {
        return await BookingGame.find({festivalId}).populate('gameId').select('gameId');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createBookingGame = async (gameId,festivalId,exhibitorId,bookingId,zone,qtExhib,qtSend,tombola,dotation,dateAdd,comment,putOnPlan,
    bringByExhibitor,received,place,isCallback,callbackPrice,isCallbackDone) => {
    try {
        const bookingGame = new BookingGame({
            gameId,festivalId,exhibitorId,bookingId,zone,qtExhib,qtSend,tombola,dotation,dateAdd,comment,putOnPlan,
            bringByExhibitor,received,place,isCallback,callbackPrice,isCallbackDone
        });
        console.log(bookingGame);
        return await bookingGame.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateBookingGame = async (informations,idBookingGame) => {
    try{
        return await BookingGame.findOneAndUpdate({_id: idBookingGame}, {...informations, _id: idBookingGame}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteBookingGame = async (_id) => {
    try{
        console.log(_id)
        return await BookingGame.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getBookingGameById,
    getAllBookingGameByFestival,
    updateBookingGame,
    createBookingGame,
    deleteBookingGame
};
