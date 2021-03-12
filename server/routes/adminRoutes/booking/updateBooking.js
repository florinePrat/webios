const BookingController = require('../../../controllers/bookingController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const booking = await BookingController.updateBooking(informations, informations.bookingId);
        return res.status(200).json(booking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier le booking"
        });
    }
};
