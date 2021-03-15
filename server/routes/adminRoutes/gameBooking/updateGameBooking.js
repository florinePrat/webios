const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const gameBooking = await GameBookingController.updateGameBooking(informations, informations.gameBookingId);
        return res.status(200).json(gameBooking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce gameBooking"
        });
    }
};
