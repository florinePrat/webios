const Booking = require('../models/booking');

const getBookingById = async(_id) => {
    try {
        return await Booking.findById(_id);
    } catch (error) {
        console.log(error);
        throw error;
    }
};

const createBooking = async (nbTableSpace1,nbTableSpace2,nbTableSpace3,nbM2Space1,nbM2Space2,nbM2Space3) => {
    try {
        const booking = new Booking({
            nbTableSpace1,nbTableSpace2,nbTableSpace3,nbM2Space1,nbM2Space2,nbM2Space3
        });
        console.log(booking);
        return await booking.save();
    } catch (error) {
        console.log(error);
        throw error;
    }
};

module.exports = {
    getBookingById,
    createBooking,
};
