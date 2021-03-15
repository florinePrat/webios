const BookingController = require('../../../controllers/BookingController');

module.exports = async (req, res) => {
    try{
        const Booking = await BookingController.deleteBooking(req.body.BookingId);
        return res.status(200).json(Booking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer le booking"
        });
    }
};