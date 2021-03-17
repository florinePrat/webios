const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        // TO DO
        const gameBooking = await GameBookingController.createBookingGame(req.body.gameId,req.body.festivalId,req.body.exhibitorId,req.body.bookingId);

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
