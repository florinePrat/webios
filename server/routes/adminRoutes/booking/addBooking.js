const BookingController = require('../../../controllers/bookingController');

module.exports = async (req, res) => {
    try{
        const booking = await BookingController.createBooking(req.body.nbTableSpace1, req.body.nbTableSpace2, req.body.nbTableSpace3, req.body.nbM2Space1, req.body.nbM2Space2, req.body.nbM2Space3, req.body.animatorNeeded,req.body.crSended,req.body.invoiceSended,req.body.paymentOk,req.body.putOnPlan,req.body.exhibitorId, req.body.festivalId);
        return res.status(200).json(booking);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer le booking"
        });
    }
};
