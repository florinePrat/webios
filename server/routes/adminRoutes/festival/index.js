const express = require('express');
const router = express.Router();

router.post('/add', require("./addFestival"));
router.put('/update', require("./updateFestival"));
router.delete('/delete', require("./deleteFestival"));

module.exports =  router;
