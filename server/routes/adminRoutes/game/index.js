const express = require('express');
const router = express.Router();

router.post('/update', require("./updateGame"));
router.post('/add', require("./addGame"));

module.exports =  router;
