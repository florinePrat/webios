const express = require('express');
const router = express.Router();

router.put('/update', require("./updateGame"));
router.post('/add', require("./addGame"));

module.exports =  router;
