const express = require('express');
const router = express.Router();

router.post('/add', require("./addExhibitor"));
router.post('/addExisting', require("./addExistingExhibitorToFestivalCurrent"));
router.put('/update', require("./updateExhibitor" ));
router.delete('/delete', require("./deleteExhibitor"));

module.exports =  router;
