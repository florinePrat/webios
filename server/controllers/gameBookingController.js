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
        return await BookingGame.find(festivalId).populate('gameId').select('gameId');
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createBookingGame = async (gameId,festivalId,publisherId,space,zone,qtExhib,qtSend,tombola,dotation,comment,putOnPlan,bringByExhibitor,received,animator,isCallback,callbackPrice,isCallbackDone) => {
    try {
        const bookingGame = new BookingGame({
            gameId,festivalId,publisherId,space,zone,qtExhib,qtSend,tombola,dotation,comment,putOnPlan,bringByExhibitor,received,animator,isCallback,callbackPrice,isCallbackDone
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


module.exports = {
    getBookingGameById,
    getAllBookingGameByFestival,
    updateBookingGame,
    createBookingGame,
};
