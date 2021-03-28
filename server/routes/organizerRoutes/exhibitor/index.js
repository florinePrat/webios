const express = require('express');
const router = express.Router();

router.get('/', require("./getAllExhibitor"));
router.get('/exhibitor', require("./getExhibitorById"));
router.get('/festival', require("./getExhibitorByFestivalId"));

module.exports =  router;

