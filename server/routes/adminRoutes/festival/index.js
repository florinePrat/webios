const express = require('express');
const router = express.Router();

router.post('/add', require("./addFestival"));
router.put('/update', require("./updateFestival"));

module.exports =  router;
