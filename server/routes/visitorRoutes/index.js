const express = require('express');
const router = express.Router();

router.use('/festival', require("./festival"));

module.exports =  router;

