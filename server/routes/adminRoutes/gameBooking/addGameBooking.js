const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        // TO DO
        const gameBooking = await GameBookingController.createGameBooking();

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
