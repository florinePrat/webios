const express = require('express');
const router = express.Router();

router.put('/update', require("./updateSpace")); // testé et validé
router.post('/add', require("./addSpace")); // testé et validé
router.delete('/delete', require("./deleteSpace")); // testé et validé

module.exports =  router;
