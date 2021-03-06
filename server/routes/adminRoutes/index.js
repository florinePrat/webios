const express = require('express');
const router = express.Router();

router.post('/signup', require("./signup"));

router.use('/exhibitor', require("./exhibitor"));
router.use('/contact', require("./contact"));
router.use('/festival', require("./festival"));
router.use('/suivi', require("./suivi"));
router.use('/zone', require("./zone"));
router.use('/space', require("./space"));
router.use('/gameBooking', require("./gameBooking"));
router.use('/exhibitor', require("./exhibitor"));
router.use('/booking', require("./booking"));


module.exports =  router;

