const express = require('express');
const router = express.Router();

router.get('/', require("../../organizerRoutes/exhibitor/getExhibitorByCurrentFestival"));
router.post('/add', require("./addExhibitor"));
router.put('/update', require("./updateExibitor" ));
router.delete('/delete', require("./deleteExhibitor"));

module.exports =  router;
