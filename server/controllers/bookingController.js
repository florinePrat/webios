const Booking = require('../models/booking');

const getBookingById = async(_id) => {
    try {
        return await Booking.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createBooking = async (nbTableSpace1,nbTableSpace2,nbTableSpace3,nbM2Space1,nbM2Space2,nbM2Space3,animatorNeeded,crSended,invoiceSended,paymentOk,putOnPlan,exhibitorId,festivalId) => {
    try {
        const booking = new Booking({
            nbTableSpace1,nbTableSpace2,nbTableSpace3,nbM2Space1,nbM2Space2,nbM2Space3,animatorNeeded,crSended,invoiceSended,paymentOk,putOnPlan,exhibitorId,festivalId        });
        console.log(booking);
        return await booking.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const updateBooking = async (informations,idBooking) => {
    try{
        return await Booking.findOneAndUpdate({_id: idBooking}, {...informations, _id: idBooking}, {new:true})
    }catch (error) {
        throw error;
    }
};

const deleteBooking = async (_id) => {
    try{
        console.log(_id)
        return await Booking.deleteOne({_id})
    }catch (error) {
        throw error;
    }
};

module.exports = {
    getBookingById,
    createBooking,
    updateBooking,
    deleteBooking
};
