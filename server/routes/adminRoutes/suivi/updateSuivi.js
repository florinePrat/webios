const suiviController = require('../../../controllers/suiviController');

module.exports = async (req, res) => {
    try{
        const informations = {...req.body};
        const suivi = await suiviController.updateSuivi(informations, informations.suiviId);
        return res.status(200).json(suivi);
    }
    catch(e){
        return res.status(500).json({
            error : "Impossible de modifier ce suivi"
        });
    }
};
