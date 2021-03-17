const express = require('express');
const router = express.Router();

router.get('/', require("./getAllFestivals"));

module.exports =  router;

