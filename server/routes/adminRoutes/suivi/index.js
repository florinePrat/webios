const express = require('express');
const router = express.Router();

// TODO : à tester Postman
router.post('/update', require("./updateSuivi"));
router.post('/add', require("./addSuivi"));
router.post('/delete', require("./deleteSuivi"));

module.exports =  router;
