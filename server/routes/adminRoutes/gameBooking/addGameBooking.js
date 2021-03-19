const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        // TO DO
        const gameBooking = await GameBookingController.createBookingGame(req.body.gameId,req.body.festivalId,req.body.exhibitorId,
            req.body.bookingId,
            req.body.zone,
            req.body.qtExhib,
            req.body.qtSend,
            req.body.tombola,
            req.body.dotation,
            req.body.dateAdd,
            req.body.comment,
            req.body.putOnPlan,
            req.body.bringByExhibitor,
            req.body.received,
            req.body.place,
            req.body.isCallback,
            req.body.callbackPrice,
            req.body.isCallbackDone);

        if(gameBookingAdded){
            return res.status(200).json(gameBooking);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce gameBooking"
        });
    }
};
