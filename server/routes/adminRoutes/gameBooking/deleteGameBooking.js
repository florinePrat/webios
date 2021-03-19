const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        const GameBooking = await GameBookingController.deleteBookingGame(req.body.gameBookingId);
        return res.status(200).json(GameBooking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer ce gameBooking"
        });
    }
};
