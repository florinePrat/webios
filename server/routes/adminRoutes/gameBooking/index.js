const express = require('express');
const router = express.Router();

// testés et validés
router.post('/add', require("./addGameBooking"));
router.delete('/delete', require("./deleteGameBooking"));
router.get('/getByFestival', require("./getGameBookingsByFestival"));
router.get('/getById', require("./getGameBooking"));

module.exports =  router;
