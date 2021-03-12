const BookingController = require('../../../controllers/bookingController');

module.exports = async (req, res) => {
    try{

        const booking = await BookingController.createBooking(req.body.name,req.body.numberOfTable1,req.body.unitPriceOfTable1,req.body.m2Price1,req.body.numberOfTable2,req.body.unitPriceOfTable2,req.body.m2Price2,req.body.numberOfTable3,req.body.unitPriceOfTable3,req.body.m2Price3,req.body.festivalId);

        if(bookingAdded){
            return res.status(200).json(booking);
        }
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer le booking"
        });
    }
};
