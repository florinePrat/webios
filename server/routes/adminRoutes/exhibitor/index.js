const express = require('express');
const router = express.Router();

router.post('/addExhibitor', require("./addExhibitor"));
router.post('/addExhibitorIsPublisher', require("./addExhibitorIsPublisher"));
router.put('/update', require("./updateExhibitor" ));
router.delete('/delete', require("./deleteExhibitor"));

module.exports =  router;
