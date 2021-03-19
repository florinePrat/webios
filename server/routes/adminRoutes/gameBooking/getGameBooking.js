const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        const gameBooking =  await GameBookingController.getBookingGameById(req.body.gameBookingId);
        return res.status(200).json(gameBooking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer le gameBooking"
        });
    }
};
