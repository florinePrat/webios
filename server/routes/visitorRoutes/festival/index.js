const express = require('express');
const router = express.Router();

router.get('/current', require("./getcurrentFestival"));

module.exports =  router;
