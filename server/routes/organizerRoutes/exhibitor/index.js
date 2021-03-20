const express = require('express');
const router = express.Router();

router.get('/', require("./getExhibitorByCurrentFestival"));

module.exports =  router;

