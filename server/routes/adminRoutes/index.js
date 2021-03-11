const express = require('express');
const router = express.Router();

router.use('/game', require("./game"));
router.use('/exhibitor', require("./exhibitor"));
/*router.use('/space', require("./space"));
router.use('/gameBooking', require("./gameBooking"));
router.use('/exhibitor', require("./exhibitor"));
router.use('/booking', require("./booking"));
router.use('/contact', require("./contact"));*/

module.exports =  router;

