const express = require('express');
const router = express.Router();

// TODO : à tester Postman
router.put('/update', require("./updateBooking"));
router.post('/add', require("./addBooking"));
router.delete('/delete', require("./deleteBooking"));

module.exports =  router;
