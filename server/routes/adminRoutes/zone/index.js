const express = require('express');
const router = express.Router();

// testés et validés
router.put('/update', require("./updateZone"));
router.post('/add', require("./addZone"));
router.delete('/delete', require("./deleteZone"));
router.get('/getByName', require("./getZoneByName"));
router.get('/getById', require("./getZoneById"));


module.exports =  router;
