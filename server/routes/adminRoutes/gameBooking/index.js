const express = require('express');
const router = express.Router();

// TODO : à tester Postman
router.post('/update', require("./updateGameBooking"));
router.post('/add', require("./addGameBooking"));
router.post('/delete', require("./deleteGameBooking"));

module.exports =  router;
