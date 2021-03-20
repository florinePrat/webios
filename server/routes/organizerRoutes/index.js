const express = require('express');
const router = express.Router();

/*router.use('/space', require("./space"));*/
router.use('/festival', require("./festival"));
router.use('/exhibitor', require("./exhibitor"));/*
router.use('/publisher', require("./publisher"));

router.use('/gameBooking', require("./gameBooking"));

router.use('/booking', require("./booking"));
router.use('/contact', require("./contact"));*/
router.use('/game', require("./game"));

module.exports =  router;

