const express = require('express');
const router = express.Router();

router.use('/game', require("./game"));
/*router.use('/space', require("./space"));
router.use('/publisher', require("./publisher"));
router.use('/gameBooking', require("./gameBooking"));
router.use('/exhibitor', require("./exhibitor"));
router.use('/booking', require("./booking"));
router.use('/contact', require("./contact"));*/

module.exports =  router;

