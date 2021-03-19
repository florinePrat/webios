const express = require('express');
const router = express.Router();

router.get('/allGames', require("./getAllGames"));

module.exports =  router;
