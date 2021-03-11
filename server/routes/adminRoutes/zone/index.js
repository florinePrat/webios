const express = require('express');
const router = express.Router();

// TODO : à tester Postman
router.post('/update', require("./updateZone"));
router.post('/add', require("./addZone"));
router.post('/delete', require("./deleteZone"));

module.exports =  router;
