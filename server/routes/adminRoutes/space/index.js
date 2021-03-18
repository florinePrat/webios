const express = require('express');
const router = express.Router();

// testés et validés
router.put('/update', require("./updateSpace"));
router.post('/add', require("./addSpace"));
router.delete('/delete', require("./deleteSpace"));
router.get('/get', require("./getSpace"));


module.exports =  router;
