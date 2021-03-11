const express = require('express');
const router = express.Router();

// TODO : à tester Postman
router.post('/update', require("./updateSpace"));
router.post('/add', require("./addSpace"));
router.post('/delete', require("./deleteSpace"));

module.exports =  router;
