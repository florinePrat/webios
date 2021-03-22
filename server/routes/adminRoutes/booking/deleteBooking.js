const BookingController = require('../../../controllers/bookingController');

module.exports = async (req, res) => {
    try{
        const Booking = await BookingController.deleteBooking(req.body.bookingId);
        return res.status(200).json(Booking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer le booking"
        });
    }
};
