const express = require('express');
const router = express.Router();

router.post('/add', require("./addFestival"));

module.exports =  router;
