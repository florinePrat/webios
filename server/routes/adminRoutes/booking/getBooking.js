const BookingController = require('../../../controllers/bookingController');

module.exports = async (req, res) => {
    try{
        const booking =  await BookingController.getBookingById(req.body.bookingId);
        return res.status(200).json(booking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer le booking"
        });
    }
};
