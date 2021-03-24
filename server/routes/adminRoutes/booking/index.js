const express = require('express');
const router = express.Router();

// testés et validés
router.put('/update', require("./updateBooking"));
router.post('/add', require("./addBooking"));
router.delete('/delete', require("./deleteBooking"));
router.get('/getAll', require("./getAllBookings"));
router.get('/getAllByFestival', require("./getAllBookingsByFestival"));
router.get('/getById', require("./getBooking"));

module.exports =  router;
