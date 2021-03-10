const BookingGame = require('../models/bookingGame');

const getBookingGameById = async(_id) => {
    try {
        return await BookingGame.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createBookingGame = async (gameId,space,qtExhib,qtSend,putOnPlan,bringByExhibitor,received,isCallback,callbackPrice,isCallbackDone) => {
    try {
        const bookingGame = new BookingGame({
            gameId,space,qtExhib,qtSend,putOnPlan,bringByExhibitor,received,isCallback,callbackPrice,isCallbackDone
        });
        console.log(bookingGame);
        return await bookingGame.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getBookingGameById,
    createBookingGame,
};
