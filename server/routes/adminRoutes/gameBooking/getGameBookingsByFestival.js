const GameBookingController = require('../../../controllers/gameBookingController');

module.exports = async (req, res) => {
    try{
        const gameBookings =  await GameBookingController.getAllBookingGameByFestival(req.body.festivalId);
        return res.status(200).json(bookings);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer les gameBookings"
        });
    }
};
