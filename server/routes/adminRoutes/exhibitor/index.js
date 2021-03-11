const express = require('express');
const router = express.Router();

router.post('/addPublisher', require("./addPublisher"));
router.post('/addExhibitor', require("./addExhibitor"));
router.post('/exhibitorispublisher', require("./addExhibitorIsPublisher"));

module.exports =  router;
