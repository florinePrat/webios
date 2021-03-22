const express = require('express');
const router = express.Router();

router.get('/', require("./getAllExhibitor"));
router.get('/festival', require("./getExhibitorByFestivalId"));

module.exports =  router;

