const GameBooking = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        const gameBooking =  await GameBooking.getAllBookingGameByFestival(req.body.festivalId);
        return res.status(200).json(gameBooking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer les games"
        });
    }
};
