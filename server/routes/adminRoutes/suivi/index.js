const express = require('express');
const router = express.Router();

// TODO : à tester Postman
router.put('/update', require("./updateSuivi"));
router.post('/add', require("./addSuivi"));
router.delete('/delete', require("./deleteSuivi"));

module.exports =  router;
