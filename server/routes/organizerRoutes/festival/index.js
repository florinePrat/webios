const express = require('express');
const router = express.Router();

router.get('/id', require("./getFestivalById"));
router.get('/', require("./getAllFestivals"));


module.exports =  router;

