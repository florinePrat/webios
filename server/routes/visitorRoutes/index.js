const express = require('express');
const router = express.Router();

router.post('/signupAdmin', require("./signup"));
router.use('/festival', require("./festival"));
router.use('/gameBooking', require("./gameBooking"));

module.exports =  router;

