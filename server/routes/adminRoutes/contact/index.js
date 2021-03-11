const express = require('express');
const router = express.Router();

router.post('/update', require("./updateContact"));
router.post('/add', require("./addContact"));
router.post('/delete', require("./deleteContact"));

module.exports =  router;
