const suiviController = require('../../../controllers/suiviController');

module.exports = async (req, res) => {
    try{
        const suivi = await suiviController.deletesuivi(req.body.suiviId);
        return res.status(200).json(suivi);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de supprimer ce suivi"
        });
    }
};
