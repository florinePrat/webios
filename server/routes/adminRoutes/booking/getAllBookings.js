const BookingController = require('../../../controllers/bookingController');

module.exports = async (req, res) => {
    try{
        const bookings =  await BookingController.getAllBookings();
        return res.status(200).json(bookings);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de récupérer les bookings"
        });
    }
};
