const GameBookingController = require('../../../controllers/GameBookingController');

module.exports = async (req, res) => {
    try{
        const GameBooking = await GameBookingController.deleteGameBooking(req.body.GameBookingId);
        return res.status(200).json(GameBooking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer ce gameBooking"
        });
    }
};
