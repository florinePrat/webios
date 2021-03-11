const suiviController = require('../../../controllers/suiviController');

module.exports = async (req, res) => {
    try{
        const suivi = await suiviController.createsuivi(req.body.festivalId,req.body.exhibitorId,req.body.datContact1,req.body.datContact2,req.body.present,req.body.statusTraking);
        return res.status(200).json(suivi);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de créer ce suivi"
        });
    }
};
